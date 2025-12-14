const crypto = require("crypto");

console.log("Start hashing");

//increase thread size 4 to 6

UV_THREADPOOL_SIZE = 5;

crypto.pbkdf2(
  "myPassword123",
  "randomSalt",
  100000, // iterations (heavy)
  64, // key length
  "sha512",
  (err, derivedKey) => {
    if (err) throw err;
    console.log("Password hashed 0");
  }
);
crypto.pbkdf2(
  "myPassword123",
  "randomSalt",
  100000, // iterations (heavy)
  64, // key length
  "sha512",
  (err, derivedKey) => {
    if (err) throw err;
    console.log("Password hashed 1");
  }
);
crypto.pbkdf2(
  "myPassword123",
  "randomSalt",
  100000, // iterations (heavy)
  64, // key length
  "sha512",
  (err, derivedKey) => {
    if (err) throw err;
    console.log("Password hashed 2");
  }
);
crypto.pbkdf2(
  "myPassword123",
  "randomSalt",
  100000, // iterations (heavy)
  64, // key length
  "sha512",
  (err, derivedKey) => {
    if (err) throw err;
    console.log("Password hashed 3");
  }
);

console.log("End of program");


//Why thread pool?

// Password hashing is CPU-intensive

// libuv sends it to thread pool

// JS thread remains free
