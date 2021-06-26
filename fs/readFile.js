//fs - file system - readFile -> leitura de arquivo

const fs = require('fs');

// readFile -> Lê o arquivo e retorna um callback (armazena dentro do Buffer antes de utilizar) (forma assincrona)
fs.readFile('texto.txt',(err, data)=>{
    if (err) throw err; // linha de código padrão para erros

    // converte o Buffer em string, aparecendo na tela ao texto
   // console.log(data.toString());

})

//operação de forma síncrona (sem callback) (forma bloqueante)
const texto = fs.readFileSync("texto.txt");

console.log(`Texto: ${texto}`);