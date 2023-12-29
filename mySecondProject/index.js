//variáveis para armazenar o número de vitórias e derrotas, o saldo de vitórias e o nível:
let numVitorias;
let numDerrotas;
let saldoVitorias;
let nivel;

//Atribuindo valores para testes:
numVitorias = 85
numDerrotas = 27

//Chamada e definição da função para calcular o número de partidas ranqueadas:
saldoRanqueadas(numVitorias, numDerrotas);

function saldoRanqueadas(a, b){
    saldoVitorias = a - b;
    return saldoVitorias;
}

//estrutura de decisão para apresentar o nível do Herói:
if(saldoVitorias<10){
    nivel = "Ferro";
} else if(saldoVitorias>=11 && saldoVitorias<=20){
    nivel = "Bronze";
} else if(saldoVitorias>=21 && saldoVitorias<=50){
    nivel = "Prata";
} else if(saldoVitorias>=51 && saldoVitorias<=80){
    nivel = "Ouro";
} else if(saldoVitorias>=81 && saldoVitorias<=90){
    nivel = "Diamante";
} else if(saldoVitorias>=91 && saldoVitorias<=100){
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

//estrutura de decisão para apresentar a mensagem final ao usuário:
if(nivel){
    console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + nivel)
} else {
    console.log("Saldo ou nível indefinido!")
}