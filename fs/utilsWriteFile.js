//util - promisefy -> escrever um arquivo


const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile); // encapsulando o módulo writeFile 
const conteudo = `Criando um arquivo utilizando promisify do módulo nativo util`;

writeFile('utilArquivo.txt', conteudo)
    .then(() => {console.log('Arquivo utilArquivo criado com sucesso!');})
    .catch((err)=> { console.log(`Deu erro: ${err}`)
});