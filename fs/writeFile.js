//fs - file system - writeFile -> escrever um arquivo

const {writeFile} = require('fs'); // pegando somente o módulo writeFile do fs

writeFile("arquivo.txt", 'Criando arquivo de texto com writeFile', err =>{
    if (err) throw err; // linha de código padrão para erros

    console.log('Arquivo criado com sucesso!');

})

