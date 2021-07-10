// permite manipular informações em formato binário dentro do Buffer
// pode ser salva em algum lugar, ser mostrado em tela 

const Buffer = require('buffer').Buffer

// exibe o binário da frase
const buf = Buffer.from('Curso completo de NodeJs');

// para poder ler o que o buffer diz em binário é necessário converter para string com o toString
console.log(buf.toString());

// colocando em outra lingua
console.log(buf.toString('utf16le'));

// outra forma de obter o binário
const buf_string = Buffer.from('Carregando uma string', 'utf-8')
console.log(buf_string)

// verificando se é um buffer
console.log(Buffer.isBuffer(buf_string))
console.log(Buffer.isBuffer(buf_string))

// trazendo somente uma parte do buffer
console.log(buf_string.toString('utf-8', 0, 10))