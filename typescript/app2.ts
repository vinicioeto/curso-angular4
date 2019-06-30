import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';

/* --- criar carros --- */
let carroA = new Carro('ferrari', 4);
let carroB = new Carro('Clio', 4);
let carroC = new Carro('Gol', 4);

// Criando lista de carros da concessionaria
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av. Jacaranda', listaDeCarros);

// Exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros);

// comprar carro
let cliente = new Pessoa('vinicio', 'ferrari');

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if (carro['modelo'] == cliente.dizerCarroPreferido()) {
    cliente.comprarCarro(carro);
  }
});

console.log(cliente.dizerCarroQueTem());
