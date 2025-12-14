// Create greet with Commander and --uppercase option


const { program } = require("commander");

program
  .argument("<name>")
  .option("-u, --uppercase", "Uppercase the name")
  .action((name, opts) => {
    if (opts.uppercase) name = name.toUpperCase();
    console.log("Hello", name);
  });

program.parse(process.argv);
