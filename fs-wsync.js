//arquivo não bloqueante

const fs = require('fs');

const dados = fs.readFile("arquivo.txt", (err, data) => {
    if (err) throw err;
    console.log("Executando a leitura de arquivo.txt")
});

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Executando o console antes do arquivo");

console.log("Executando o console após o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));