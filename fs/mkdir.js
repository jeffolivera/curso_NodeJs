//fs - file system - mkdir -> criar diretórios (pastas)

const fs = require('fs');

const assets = ['css', 'js', 'images', 'fonts', 'lib'] // pastas que serão criadas

function make(dir){ //função para criar as novas pastas

    dir.forEach((item)=>{
        fs.mkdir(`projeto/assets/${item}`,{recursive:true}, (err)=>{ //recursive: true -> cria subdiretórios
            if (err) throw err; // linha de código padrão para erros
        
            console.log('Diretório criado com sucesso: ', item);
        })
    })
    
}

make(assets);

