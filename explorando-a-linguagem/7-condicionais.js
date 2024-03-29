console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// Adicionando um item na lista
listaDeDestinos.push(`Curitiba`);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); // removendo item
} else if (estaAcompanhada) {
    console.log("Comprador está acompanhado");
    // Exclui um item da lista
    listaDeDestinos.splice(1,1);
} else {
    console.log("Não é maior de idade e não posso vender");
}


// Outra forma com valores lógicos


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(1,1); // removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}


console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Infelizmente você não pode embarcar");
}



console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);


console.log(listaDeDestinos[1], listaDeDestinos[0]);