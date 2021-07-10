// processo em segundo plano 
// código para exibir os arquivos e processos feitos em segundo plano

const { spawn } = require('child_process');
const ls = spawn('ls', ['..']); // exibe os arquivos de dentro das pastas 

ls.stdout.on('data',(data) => {
    console.log(`stdout: ${data}`);
});


ls.stderr.on('data',(data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`Processo em segundo plano finalizado com o código ${code}`);
})