// tratativa para erros



// manipulando o erro para não parar a execução do código
//try -> tente executar alguma coisa, se der erro execute o catch

function execute(){
    executeTo()    
}

function executeTo(){
    throw new Error('Deu erro!')
}

function init(){
    try { 
        execute()
    } catch (error) {
        console.log(`Temos um problema! ${error.message}`) // mostrando o erro junto do problema
    }
}

init()
console.log('Depois do erro') // exibe a mensagem mesmo dando erro e a execução do código não parou