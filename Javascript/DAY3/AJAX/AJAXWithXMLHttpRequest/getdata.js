function GetData(callback) {
  // logic for getting data from server
  console.log("Getting data");

  let xmlHttpReq = new XMLHttpRequest();

  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
      callback(xmlHttpReq.responseText);
    }
  };
  xmlHttpReq.send();
}
