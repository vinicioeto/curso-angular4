"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
/* --- criar carros --- */
var carroA = new Carro_1.default('ferrari', 4);
var carroB = new Carro_1.default('Clio', 4);
var carroC = new Carro_1.default('Gol', 4);
// Criando lista de carros da concessionaria
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av. Jacaranda', listaDeCarros);
// Exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros);
// comprar carro
var cliente = new Pessoa_1.default('vinicio', 'ferrari');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
