async function LoadProducts() {
  let response = await fetch("http://localhost:3000/products");
  let products = await response.json();
  //   console.log(products);

  let productList = document.querySelector(".productList");
  for (const p of products) {
    let newProductLi = document.createElement("li");
    newProductLi.innerText = p.title;
    productList.appendChild(newProductLi);
  }
}

document.addEventListener("DOMContentLoaded", LoadProducts);
