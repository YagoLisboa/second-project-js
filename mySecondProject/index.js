//variáveis para armazenar o número de vitórias e derrotas, o saldo de vitórias e o nível:
let numVitorias;
let numDerrotas;
let saldoVitorias;
let nivel;

//Chamada e definição da função para calcular o número de partidas ranqueadas:
saldoRanqueadas(numVitorias, numDerrotas);

function saldoRanqueadas(a, b){
    saldoVitorias = a - b;
    return saldoVitorias;
}