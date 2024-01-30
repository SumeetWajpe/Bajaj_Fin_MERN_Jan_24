import fs from "fs";

console.log("Started..");
// non-blocking API
fs.readFile("src/Input.txt", (err, dataFromFile) => {
  if (err) {
    console.log("Error : " + err.message);
  } else {
    // console.log(dataFromFile.toString());
    fs.writeFile("src/Output.txt", dataFromFile, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("File created successfully !");
      }
    });
  }
});

// Blocking API
// var dataFromTheFile = fs.readFileSync("src/Input.txt");
// console.log(dataFromTheFile.toString());
console.log("Ended..");
