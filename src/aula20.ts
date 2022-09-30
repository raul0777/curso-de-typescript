/* ################# Aula 21 ################# */
export class Empresa {
  public readonly nome: string; //public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostraColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa('Facebook', '11.111.111/0001-11');
const colaborador = new Colaborador('Raul', 'Gomes');
const colaborador1 = new Colaborador('Romeu', 'Carvalho');
const colaborador2 = new Colaborador('João', 'Costa');
empresa.adicionaColaborador(colaborador);
empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador({
  nome: 'Paulo',
  sobrenome: 'Alves',
});
console.log(empresa);
empresa.mostraColaborador();

/* ################# Aula 23/24 ################# */
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Raul', 'Gomes', 30, '000.000.000-00');
const aluno = new Aluno('Romeu', 'Carvalho', 30, '111.111.111-11', '001');
const cliente = new Cliente('Alfa', 'Alves', 30, '222.222.222-22');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);

/* ################# Aula 25 ################# */
export class Empresa {
  readonly nome: string; //public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostraColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Facebook extends Empresa {
  constructor() {
    super('Facebook', '11.111.111/0001-11');
  }
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Facebook();
const colaborador = new Colaborador('Raul', 'Gomes');
const colaborador1 = new Colaborador('Romeu', 'Carvalho');
const colaborador2 = new Colaborador('João', 'Costa');
empresa.adicionaColaborador(colaborador);
empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
const colaboradorRemovido = empresa.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa);

/* ################# Aula 26 ################# */
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Raul', 'Gomes', 30, '453.786.746-35');
pessoa.cpf = '453.786.746-00';
console.log(pessoa.cpf);

/* ################# Aula 27 ################# */
export class Pessoa {
  static minhaIdade = 25;
  static meuCpf = '651.849.165-64';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Pessoa.minhaIdade, Pessoa.meuCpf);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.minhaIdade, Pessoa.meuCpf);
  }
}

const pessoa = new Pessoa('Raul', 'Gomes', 30, '453.786.746-35');
const pessoa1 = Pessoa.criaPessoa('Maria', 'Carvalho');
console.log(pessoa);
console.log(pessoa1);
pessoa.normalMethod();
console.log(Pessoa.minhaIdade, Pessoa.meuCpf);

/* ################# Aula 28 ################# */
//Singleton - GoF | factory Method -GoF
export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada.');
      return Database.database;
    }
    console.log('Criando nova instância.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db = Database.getDatabase('localhost', 'root', '123456');
db.connect();
const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

console.log(db === db2);

/* ################# Aula 30 ################# */
export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Raul');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Maquina');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.ferramenta = null;
escritor.escrever();

/* ################# Aula 31 ################# */
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.valor, 0);
  }
}

export class Produto {
  constructor(public nome: string, public valor: number) {}
}
const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 4.9);
const produto3 = new Produto('Caneta', 0.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProduto());

/* ################# Aula 32 ################# */
export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelera(): void {
    this.motor.acelera();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelera(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parando...');
  }

  desligar(): void {
    console.log('Motor está desligando...');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelera();
carro.parar();
carro.desligar();

/* ################# Aula 33 ################# */
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Raul', 'Gomes');
console.log(pessoa.nomeCompleto());

/* ################# Aula 34 ################# */
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa1 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}
export class Pessoa implements TipoPessoa1 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa1 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Raul',
  sobrenome: 'Agora tá ok',
};

const pessoa = new Pessoa('Raul', 'Gomes');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());

/* ################# 36 ################# */
/* Declaration merging */
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly rua: string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Raul',
  sobrenome: 'Gomes',
  rua: ['Av. Brasil'],
  idade: 30,
};
pessoa.rua.push('Rua Nova');
console.log(pessoa);
