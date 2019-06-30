import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = '';

  inserir(object: T): boolean {
    console.log('logica de insert');
    return true;
  }

  atualizar(object: T): boolean {
    console.log('logica de update');
    return true;
  }

  remover(id: number): T {
    console.log('logica de delet');
    return Object();
  }

  selecionar(id: number): T {
    console.log('logica de select');
    return Object();
  }

  selecionarTodos(): [T] {
    console.log('logica de getALl');
    return [Object()];
  }
}