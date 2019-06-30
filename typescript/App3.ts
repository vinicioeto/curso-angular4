import Carro from './Carro';
import Moto from './Moto';
import Concessionaria from './Concessionaria';

let carro = new Carro('Ferrari', 4);

let moto = new Moto();

let concessionaria = new Concessionaria('Aguas claras', []);

console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
