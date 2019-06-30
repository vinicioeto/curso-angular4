import { DaoInterface } from './DaoInterface';
import Carro from './Carro';

export class CarroDao implements DaoInterface {
  nomeTabela: string = 'tb_Carro';

  inserir(object: Carro): boolean {
    console.log('logica de insert');
    return true;
  }

  atualizar(object: Carro): boolean {
    console.log('logica de update');
    return true;
  }

  remover(id: number): Carro {
    console.log('logica de delet');
    return new Carro('', 0);
  }

  selecionar(id: number): Carro {
    console.log('logica de select');
    return new Carro('', 0);
  }

  selecionarTodos(): [any] {
    console.log('logica de getALl');
    return [new Carro('', 0)];
  }
}
