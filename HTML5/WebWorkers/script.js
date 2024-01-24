this.onmessage = function (msg) {
    // no access to document,no window,no history, no local&session storage
    // access to XMLHttpRequest, IndexedDB
  //   console.log(msg.data);
  //   postMessage("Message from worker thread !");
  var arr = [];
  for (let i = 0; i < 100000; i++) {
    arr[i] = [];
    for (let j = 0; j < 5000; j++) {
      arr[i][j] = i;
    }
  }

  postMessage(arr[2000][3000]);
};
