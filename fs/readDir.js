//fs - file system - readdir -> leitura de diretório

const fs = require('fs');

// readdir = lê o diretorio e retorna um vetor
// readdirSync = somente lê o diretorio (bloqueante)
fs.readdir(__dirname, (err, data) => { // para ver diretórios acima colocar o "../" e tirar o  __dirname
    if (err) throw err; // linha de código padrão para erros

    data.forEach((files)=> {
        console.log(__dirname +'\\'+ files); // lê o diretório atual de onde se encontra esse arquivo e outros arquivos caso haja
    })
});