const http = require('http');

const hostname = '127.0.0.1'; // constante para o nome do servidor
const port = 3000;
const url = `http://${hostname}:${port}`;

const server = http.createServer((req, res) => { // constante que cria o servidor
    res.statusCode = 200; // status ok
    res.setHeader('Content-Type', 'text/html'); // cria um conteudo html
    res.end('<h1>Bem Vindo<br/>Node.JS</h1>'); // conteudo que vai dentro do html
});

server.listen(port, hostname, ()=> {
    console.log(`Servidor rodando em: ${url}`);
})

// contante que faz abrir o navegador
const open = (process.plataform == 'darwin'? 'open': process.plataform == 'win32'? 'start': 'xdg-open');

require('child_process').exec(open + '' + url); // abre o navegador assim que o servidor começa a rodar