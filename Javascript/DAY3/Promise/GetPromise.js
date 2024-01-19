function GetPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Resolving promise !");
      resolve("Success !");
      //   console.log("Rejecting promise !");

      //   reject("Error !");
    }, 3000);
  });
}
