import { DaoInterface } from './DaoInterface';
import Moto from './Moto';

export class MotoDao implements DaoInterface {
  nomeTabela: string = 'tb_Moto';

  inserir(object: Moto): boolean {
    console.log('logica de insert');
    return true;
  }

  atualizar(object: Moto): boolean {
    console.log('logica de update');
    return true;
  }

  remover(id: number): Moto {
    console.log('logica de delet');
    return new Moto();
  }

  selecionar(id: number): Moto {
    console.log('logica de select');
    return new Moto();
  }

  selecionarTodos(): [any] {
    console.log('logica de getALl');
    return [new Moto()];
  }
}
