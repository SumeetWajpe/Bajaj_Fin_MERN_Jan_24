var axios = require("axios"); // npm
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
