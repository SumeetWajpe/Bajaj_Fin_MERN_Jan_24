import fs from "fs";
import { EventEmitter } from "stream";


const fileStreamReader = fs.createReadStream("src/Input.txt", "utf-8");
const fileStreamWriter = fs.createWriteStream("src/Output.txt", "utf-8");

console.log("Started..");
// var data = "";
// fileStreamReader.on("data", chunk => {
//   console.log("\r\n>>>>>>>>>>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>>>>>>>>\r\n");
//   data += chunk.toString();
// });

// fileStreamReader.on("end", () => {
//   fileStreamWriter.write(data);
//   fileStreamWriter.end(); // end the writing stream
// });

// fileStreamReader.on("error", err => {
//   console.log(err);
// });

// OR
fileStreamReader.pipe(fileStreamWriter);
console.log("Ended..");
