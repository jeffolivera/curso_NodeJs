import {EventEmitter} from 'events'

class Evento extends EventEmitter {}
const meuEvento = new Evento();
//subscriber - assinante
meuEvento.on('seguranca', (x,y)=>{ // .on a gente cria o evento

    console.log(`Executando o evento 'seguranca': ${x} ${y} `)
});

// emissor - publisher
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');

meuEvento.on('encerrar', (dados)=>{
    console.log('Assinante: ' + dados)
});

meuEvento.emit('encerrar', 'Encerrando a execução dos dados!');

