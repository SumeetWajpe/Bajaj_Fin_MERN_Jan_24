// if(navigator.serviceWorker){

// }

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js").then(
    () => console.log("Service Worker registered successfully !"),
    e => console.log(e.message),
  );
}
