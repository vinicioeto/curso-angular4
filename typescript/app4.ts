import { Dao } from './Dao';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import Carro from './Carro';

// let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

// let dao2: PessoaDao = new PessoaDao();
let pessoa = new Pessoa('', '');


let dao: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao2: Dao<Pessoa> = new Dao<Pessoa>();
let dao3: Dao<Carro> = new Dao<Carro>();

dao.inserir(concessionaria);
dao2.atualizar(pessoa);
dao3.selecionar(1);
