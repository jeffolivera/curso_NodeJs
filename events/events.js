const EventEmitter = require('events')

class Evento extends EventEmitter {}
const meuEvento = new Evento();

// .on a gente cria o evento
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'seguranca': ${x} ${y} `)
});

meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');

