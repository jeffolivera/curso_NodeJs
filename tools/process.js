console.log(`Nome do arquivo: `, __filename);
console.log(`Diretório do arquivo: `, __dirname); // de onde vem
console.log(`Diretório em que foi invocado: `,process.cwd()); // de onde chamou
//console.log(process.env);  traz muitas informações do computador
console.log(`Parâmetros de execução: `,process.argv);

switch(process.argv[2]){
    case '-a':
        console.log('Execute rotina principal');
        break;
    case '-i':
        console.log('Execute instalação');
        break;
    case '-q':
        console.log('Encerrando a aplicação'); 
        process.exit(); // interrompe imediatamente o código
        break;
    default:
        console.log('Parametro inválido'); 
}

console.log(`Sistema Operacional: `,process.env.OS);
console.log(`Usuário do SO: `,process.env.USERNAME);
console.log(`Idioma: `,process.env.LANG);
console.log(`Nome do Server: `,process.env.COMPUTERNAME);
console.log(`Ambiente do servidor: `,process.plataform);
