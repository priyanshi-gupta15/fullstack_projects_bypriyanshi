const crypto = require("crypto");

console.log("Start hashing");

crypto.pbkdf2(
  "myPassword123",
  "randomSalt",
  100000, // iterations (heavy)
  64, // key length
  "sha512",
  (err, derivedKey) => {
    if (err) throw err;
    console.log("Password hashed");
  }
);

console.log("End of program");


//Why thread pool?

// Password hashing is CPU-intensive

// libuv sends it to thread pool

// JS thread remains free
