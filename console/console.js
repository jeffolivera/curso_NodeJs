console.log('Exibindo uma mensagem no console!')

// exibindo erro
console.error(new Error('Exibindo mensagem de erro, temos problemas!'))

// exibindo dados em formato de tabela
const carros = ['GM', 'FIAT', 'FORD', 'VW', 'Renault', 'Honda', 'Hyundai']

console.table(carros);

//exibindo objeto em formato de tabela
const dados = {name: 'Jeferson Geovani', empresa: 'GAVB Consulting'}

console.table(dados);

// contando quantas vezes foi passado em determinado trecho de código

console.count('processo'); // uma vez
console.count('processo'); // duas vezes
console.count('processo'); // tres vezes

// resetando o processo
console.log('Resetando o processo');
console.countReset('processo');
console.count('processo'); // volta para 1 

//ver quanto tempo leva para processar uma parte do código
console.time('contador'); // inicio da contagem

for (let index = 0; index < 100; index++) {
  //console.log('-');
}

console.timeEnd('contador'); // fim da contagem

// verifica se uma condição está dando certo, se der erro ele exibe uma mensagem de erro. Caso contrário não
console.assert(true, 'Faça alguma coisa');
console.assert(false, 'Deu erro %s','Não funcionou!');

// limpa todos os dados do console
//console.clear();

