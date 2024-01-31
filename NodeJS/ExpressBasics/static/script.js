async function FetchProducts() {
  let response = await fetch("http://localhost:3000/products");
  if (response.ok) {
    let products = await response.json();
    DisplayProducts(products);
  }
}
function DisplayProducts(products) {
  // Use for-of
  var divWrapper = document.querySelector(".productList");

  for (let index = 0; index < products.length; index++) {
    divWrapper.innerHTML += CreateProductItem(products[index]);
  }
}
// Use document.createElement() instead
function CreateProductItem(theProduct) {
  return ` <div class="col-md-3" id="${theProduct.id}">
          <div class="card border border-1 shadow p-3 mb-5 bg-body-tertiary rounded">
            <img
            height="250px"
            width="350px"
              src="${theProduct.imageUrl}"
              class="card-img-top"
              alt="${theProduct.title}"
            />
            <div class="card-body">
              <h5 class="card-title">${theProduct.title}</h5>
              <p class="card-text">₹.${theProduct.price}</p>
              <p class="card-text">
                ${createRatings(theProduct)}
              </p>
               <button type="button" class="btn btn-primary"><i class="fa-solid fa-thumbs-up"></i>${
                 theProduct.likes
               } </button>
            
              </div>
          </div>
        </div>
    `;
}

function createRatings(theProduct) {
  let ratings = "";
  for (let index = 0; index < theProduct.rating; index++) {
    ratings += `<span style="color: orange;"><i class="fa-solid fa-star"></i></span>`;
  }
  return ratings;
}

window.addEventListener("DOMContentLoaded", FetchProducts);
