"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_Carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('logica de delet');
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('logica de select');
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('logica de getALl');
        return [new Carro_1.default('', 0)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
