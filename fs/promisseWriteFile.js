const {writeFile} = require('fs');

function criarArquivo(name, content){
    return new Promise((resolve, reject)=>{

        writeFile(name, content, err=>{
            if (err) return reject(err);
            resolve();
        });
    });
};

criarArquivo('promisseArquivo.txt', 'Crindo arquivo utilizando promises')
.then(()=>{console.log('Arquivo promisseArquivo.txt criado com sucesso!')})
.catch(err=>{ console.error(err)});

