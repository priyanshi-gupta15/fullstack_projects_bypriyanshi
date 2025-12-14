const { log } = require("console");
const fs = require("fs");

console.log("file reading start");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});

console.log("End of program");


// Why thread pool?

// File system access is blocking

// libuv handles it in background threads
