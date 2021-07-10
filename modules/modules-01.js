console.log('Executando modulo-01.js')


// função oculta (não está disponível para visualização)
// const para o módulo permanecer oculto e só for chamado em outro lugar somente se for necessário
const oculta = ()=>{
    console.log('Executando função oculta')
}

const executa = ()=>{
    console.log('Executando a função executa')
}

const welcome = 'Bem vindo ao módulo module-01.js'


module.exports = {executa, welcome, oculta}

//REPL (como se fosse um editor de texto)
// para funcionar é necessário escrever no comander diteto
// node e executar require('./modules-01')
// para limpar o cache .exit 