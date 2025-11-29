process.argv — the raw, built-in way Node reads CLI input
What it is

process.argv is an array provided by Node’s process global that contains the command-line arguments used to start the Node process.

```process.argv === [ nodeExecutablePath, scriptPath, arg1, arg2, ... ]```

* process.argv[0] → path to node executable

* process.argv[1] → path to the script being executed (e.g., cli.js)

* process.argv[2+] → user-supplied arguments


Examples

cli.js
```
// cli.js
console.log(process.argv);
```


Run:
```
node cli.js hello world --count 3 ```


Output:
```
[ '/usr/bin/node',
  '/path/to/cli.js',
  'hello',
  'world',
  '--count',
  '3' ]```

  Parsing by hand
// parse-simple.js

const args = process.argv.slice(2); // drop node & script
const name = args[0];
const flagIndex = args.indexOf('--count');
const count = flagIndex !== -1 ? Number(args[flagIndex + 1]) : 1;

console.log({ args, name, count });


This works for tiny scripts but quickly gets messy. That’s why libraries like Commander exist.


Commander.js — what it is and why use it
What is Commander?

Commander is a widely-used npm library for building powerful, user-friendly CLI programs. It handles:

Subcommands

Options (flags)

Required options/arguments

Help & usage

Version command

Parsing and validation

Action handlers (sync/async)

## Installing Commander
``` npm init -y
npm install commander ```


program.argument('<file>', 'file to process');
program.option('-v, --verbose', 'enable verbose logging');
program.argument('<files...>', 'multiple files');


## Inline subcommands (single file)
program

  .command('add <a> <b>')
  .description('Add two numbers')
  .action((a, b) => {
    console.log(Number(a) + Number(b));
  });

program.parse(process.argv);


## Async handlers & Promises

Commander supports async actions:

program
  .command('fetch <url>')
  .action(async (url) => {
    const res = await fetch(url);
    const text = await res.text();
    console.log(text.slice(0, 200));
  });