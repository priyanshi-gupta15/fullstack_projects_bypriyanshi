## Streams vs Buffers in Node.js

What is a Buffer?

A Buffer stores the entire data in memory at once.

👉 Think of it as:

Download whole movie → then play

Example: Buffer (fs.readFile)

```js
 const fs = require("fs");

fs.readFile("bigfile.txt", (err, data) => {
  console.log("File loaded");
});

```


**📌Problem:**

Loads full file into RAM

Not good for large files

** What is a Stream? **

A Stream processes data piece by piece (chunks).

👉 Think of it as:

Watch movie while downloading

Example: Stream (fs.createReadStream)
```js
const fs = require("fs");

const stream = fs.createReadStream("bigfile.txt");

stream.on("data", chunk => {
  console.log("Received chunk");
});
```


**📌Advantage:**

Low memory usage
Faster
Scalable

Types of Streams

1️⃣ Readable – read data
2️⃣ Writable – write data
3️⃣ Duplex – read & write
4️⃣ Transform – modify data

**Stream Pipe (🔥 Important)**

```js
fs.createReadStream("input.txt")
  .pipe(fs.createWriteStream("output.txt"));
```


✔ Automatically handles:
Flow control
Backpressure

Streams vs  Buffers (Comparison)  
>Feature	       Buffer    	     Stream  
>Memory	       High	           Low  
>Data	         Whole at once	 In chunks  
>Speed	         Slower   	     Faster  
>Best for	     Small files	   Large files  
>Scalability    ❌ Poor	       ✅ Excellent  