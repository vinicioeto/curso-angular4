import { DaoInterface } from './DaoInterface';
import Pessoa from './Pessoa';

export class PessoaDao implements DaoInterface {
  nomeTabela: string = 'tb_Pessoa';

  inserir(object: Pessoa): boolean {
    console.log('logica de insert');
    return true;
  }

  atualizar(object: Pessoa): boolean {
    console.log('logica de update');
    return true;
  }

  remover(id: number): Pessoa {
    console.log('logica de delet');
    return new Pessoa('', '');
  }

  selecionar(id: number): Pessoa {
    console.log('logica de select');
    return new Pessoa('', '');
  }

  selecionarTodos(): [any] {
    console.log('logica de getALl');
    return [new Pessoa('', '')];
  }
}
