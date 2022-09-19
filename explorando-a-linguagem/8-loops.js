console.log(`\nTrabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// Adicionando um item na lista
listaDeDestinos.push(`Curitiba`);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 4 ) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } 

    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe, tivemos um erro");
}


for (let cont = 0;cont < 3; cont++) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        //break;
    }
    contador += 1;
}