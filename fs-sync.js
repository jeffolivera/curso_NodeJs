//arquivo boqueante

const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Executando o console antes do arquivo");

const dados = fs.readFileSync("file.txt");

console.log("Executando o console após o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));