const args = process.argv.slice(2).map(Number);

const sum = args.reduce((a, b) => a + b, 0);

console.log(sum);