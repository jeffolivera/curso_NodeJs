function sum(x){
    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject(`Tá de brincadeira`);
        }
        setTimeout(()=>{
            resolve ( x + 5000);
        },3000);
    });
    
}

async function main(){
    try {
        const resultado = await sum('#');
        console.log(`Resultado com Async/await: ${resultado}`)
    } catch (err) {
        console.log(`Temos problemas: ${err}`)
        console.log(process.env.USERNAME) // saber quem é o usuário
    }
    
}

main();