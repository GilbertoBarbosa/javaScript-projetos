console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// Adicionando um item na lista
listaDeDestinos.push(`Curitiba`);

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// Exclui um item da lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);