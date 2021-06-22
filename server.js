const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; // status de OK
    res.setHeader('Content-Type', 'text/plain'); // tudo certo
    res.end('Olá mundo \n Meu primeiro script'); 
});

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`)
});