// manipulado os caminhos dos arquivos 
// extrair informações do caminho, ajustar, formatar

const path = require('path');

// saber informações sobre o arquivo
console.log(path.basename('c:\Users\Jeferson Oliveira\OneDrive\Desktop\Repositório NodeJs\fs\index.html'));

// normalizando uma url
console.log(path.normalize('c\\temp/dir//subdir/dir/..')); //O resultado fica c:\\temp\dir\subdir

// montando um caminho 
console.log(path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..'));

// caminho absoluto da url
console.log(path.resolve('path.js'));

// pegando o nome da extensão do arquivo
console.log(path.extname('path.js'));