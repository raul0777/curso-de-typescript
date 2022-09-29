// /* ################# Aula 01 ################# */
// /* eslint-disable */
// //Tipos básicos (aqui ocorre inferência de tipos)
// let nome: string = 'Raul'; //Qualquer tipo de strings: '' "" ``
// let idade: number = 30; //10, 1.57, -5.55, 0xf00d, 0o7744
// let adulto: boolean = true; //true ou false
// let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
// //let big: bigint = 10n; //bigint

import exp from 'constants';
import { type } from 'os';

// //Arrays
// let arrayDeNumero: Array<number> = [1, 2, 3];
// let arrayDeNumero2: number[] = [1, 2, 3];
// let arrayDeStrings: Array<string> = ['a', 'b'];
// let arrayDeStrings2: string[] = ['a', 'b'];

// //Objetos
// let pessoa1: { nome: string; idade: number; adulto?: boolean } = {
//   idade: 30,
//   nome: 'Raul',
// };

// //Funções
// function soma(x: number, y: number): number {
//   return x + y;
// }
// const soma2: (x: number, y: number) => number = (x, y) => x + y;

// /* ################# Aula 02 ################# */
// //Utilize any apena em último caso
// function showMessage(msg: any) {
//   return msg;
// }

// console.log(showMessage([1, 2, 3]));
// console.log(showMessage('olá'));
// console.log(showMessage(1));

// /* ################# Aula 03 ################# */
// function semRetorno(...args: string[]): void {
//   console.log(args.join(' '));
// }

// const pessoa = {
//   nome: 'Raul',
//   sobrenome: 'Gomes',

//   exibirNome(): void {
//     console.log(this.nome + ' ' + this.sobrenome);
//   },
// };

// semRetorno('Raul', 'Gomes');
// pessoa.exibirNome();

// export { pessoa };

// /* ################# Aula 04 ################# */
// const objetoA: {
//   readonly chaveA: string;
//   chaveB: string;
//   chaveC?: string;
//   [key: string]: unknown;
// } = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

// objetoA.chaveB = 'Outro valor';
// objetoA.chaveC = 'Nova chave';
// objetoA.chaveD = 'Nova chave';

// console.log(objetoA);

// /* ################# Aula 05 ################# */
// //Array<T> ~ T[]
// export function multiplicaArgs(...args: Array<number>): number {
//   return args.reduce((ac, valor) => ac * valor, 1);
// }

// export function concatenaString(...args: string[]): string {
//   return args.reduce((ac, valor) => ac + valor);
// }

// export function toUpperCase(...args: string[]): string[] {
//   return args.map((valor) => valor.toLocaleUpperCase());
// }

// const result = multiplicaArgs(1, 2, 3);
// const concatenação = concatenaString('a', 'b', 'c');
// const upper = toUpperCase('a', 'b', 'c');

// console.log(result);
// console.log(concatenação);
// console.log(upper);

// /* ################# Aula 06 ################# */
// //Tuple
// const dadosCliente: readonly [number, string] = [1, 'Raul'];
// const dadosCliente1: [number, string, string] = [1, 'Raul', 'Gomes'];
// const dadosCliente2: [number, string, string?] = [1, 'Raul'];
// const dadosCliente3: [number, ...string[]] = [1, 'Raul', 'Gomes'];

// dadosCliente[0] = 100;
// dadosCliente3[2] = 'Carvalho';

// console.log(dadosCliente);
// console.log(dadosCliente1);
// console.log(dadosCliente2);
// console.log(dadosCliente3);

// //readonly array
// const array: readonly string[] = ['Raul', 'Gomes'];
// const array1: ReadonlyArray<string> = ['Raul', 'Carvalho'];

// console.log(array);
// console.log(array1);

// /* ################# Aula 07 ################# */
// let x;
// if (typeof x === 'undefined') x = 20;
// console.log(x * 2);

// export function createPerson(
//   firstName: string,
//   lastName?: string,
// ): {
//   firstName: string;
//   lastName?: string;
// } {
//   return {
//     firstName,
//     lastName,
//   };
// }

// export function squareOf(x: any) {
//   if (typeof x === 'number') return x * x;
//   return null;
// }

// const squareOfTwoNumber = squareOf(2);
// const squareOfTwoString = squareOf('2');

// if (squareOfTwoNumber == null) {
//   console.log('Conta inválida');
// } else {
//   console.log(squareOfTwoNumber * 100);
// }

// /* ################# Aula 08 ################# */
// export function criaErro(): never {
//   throw new Error('Erro qualquer');
// }

// criaErro();

// /* ################# Aula 09 ################# */
// enum Cores {
//   VERMELHO = 10,
//   AZUL = 100,
//   AMARELO = 200,
// }

// enum Cores {
//   ROXO = 'ROXO',
//   VERDE = 201,
//   ROSA, //202
// }

// export function escolhaACor(cor: Cores): void {
//   console.log(Cores[cor]);
// }

// escolhaACor(Cores.ROXO);

// /* ################# Aula 10 ################# */
// let x: unknown;

// x = 100;
// x = 'Raul';
// x = 900;
// x = 10;
// const y = 800;

// if (typeof x === 'number') console.log(x + y);

// /* ################# Aula 11 ################# */
// function addOrConcat(
//   a: number | string | boolean,
//   b: number | string | boolean,
// ): number | string {
//   if (typeof a === 'number' && typeof b === 'number') return a + b;
//   return `${a}${b}`;
// }

// console.log(addOrConcat(10, 20));
// console.log(addOrConcat('10', '20'));
// console.log(addOrConcat(10, '20'));
// console.log(addOrConcat(true, false));

// /* ################# Aula 12 ################# */
// let x = 10; //eslint-disable-line
// x = 0b1010;
// const y = 10;
// const a = 100; //eslint-disable-line

// const pessoa = {
//   nome: 'Raul' as const,
//   sobrenome: 'Gomes',
// };

// function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
//   return cor;
// }
// console.log(escolhaCor('Vermelho'));

// //Module mode
// export default 1;

// /* ################# Aula 13 ################# */
// type Idade = number;
// type Pessoa = {
//   nome: string;
//   idade: Idade;
//   salario: number;
//   corPreferida?: string;
// };
// type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; //OR
// type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'; //OR
// type CorPreferida = CorRGB | CorCMYK;

// const pessoa: Pessoa = {
//   idade: 30,
//   nome: 'Raul',
//   salario: 4_300,
// };

// export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
//   return { ...pessoa, corPreferida: cor };
// }

// console.log(setCorPreferida(pessoa, 'Azul'));
// console.log(pessoa);

// /* ################# Aula 14 ################# */
// type TemNome = { nome: string };
// type TemSobrenome = { sobrenome: string };
// type TemIdade = { idade: number };
// type Pessoa = TemNome & TemSobrenome & TemIdade; //AND

// type AB = 'A' | 'B';
// type AC = 'A' | 'C';
// type AD = 'D' | 'A';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// type Intersection = AB & AC & AD;

// const pessoa: Pessoa = {
//   nome: 'Raul',
//   sobrenome: 'Gomes',
//   idade: 30,
// };

// console.log(pessoa);

// //Module mode
// export { pessoa };

// /* ################# Aula 15 ################# */
// type MapStringsCallback = (item: string) => string;

// export function mapString(
//   array: string[],
//   callbackfn: MapStringsCallback,
// ): string[] {
//   const newArray: string[] = [];

//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     newArray.push(callbackfn(item));
//   }
//   return newArray;
// }

// const abc = ['a', 'b', 'c'];
// const abcMapped = mapString(abc, (item) => item.toUpperCase());
// console.log(abc);
// console.log(abcMapped);

// /* ################# Aula 16 ################# */
// type VerifyUserFn = (user: User, sentValue: User) => boolean;
// type User = { username: string; password: string };

// const verifyUser: VerifyUserFn = (user, setValue) => {
//   return (
//     user.username === setValue.username && user.password === setValue.password
//   );
// };

// const bdUser = { username: 'Raul', password: '123456' };
// const sentUser = { username: 'João', password: '123456', permissions: '' };
// const loggedIn = verifyUser(bdUser, sentUser);
// console.log(loggedIn);

// /* ################# Aula 17 ################# */
// /* RECOMENDADO */
// //Condicional
// const body = document.querySelector('body');
// if (body) body.style.background = 'red';

// //Type assertion
// const body2 = document.querySelector('body') as HTMLBodyElement;
// body2.style.background = 'red';

// //HTMLElement
// const input = document.querySelector('.input') as HTMLInputElement;
// input.value = 'Qualquer coisa';
// input.focus();

// /* NÃO RECOMENDADO */
// //Type assertion
// const body3 = document.querySelector('body') as unknown as number;

// //Non-null assertion (!)
// const body1 = document.querySelector('body')!;
// body1.style.background = 'red';

// /* ################# Aula 18 ################# */
// export default (): void => {
//   console.log('Sou o módulo.');
// };

// /* ################################ */

// import occupation from './mod';

// occupation();

// /* ################# Aula 19 ################# */
// ##########EXERCÍCIO##########
// import './form-controla';
// /* ################# Aula 20 ################# */
// export function função(this: Date, nome: string, age: number): void {
//   console.log(this);
//   console.log(nome, age);
// }

// função.call(new Date(), 'Raul', 30);
// função.apply(new Date(), ['Raul', 30]);

// /* ################# Aula 21 ################# */
// export class Empresa {
//   public readonly nome: string; //public não necessário
//   private readonly colaboradores: Colaborador[] = [];
//   protected readonly cnpj: string;

//   constructor(nome: string, cnpj: string) {
//     this.nome = nome;
//     this.cnpj = cnpj;
//   }

//   adicionaColaborador(colaborador: Colaborador): void {
//     this.colaboradores.push(colaborador);
//   }
//   mostraColaborador(): void {
//     for (const colaborador of this.colaboradores) {
//       console.log(colaborador);
//     }
//   }
// }

// export class Colaborador {
//   constructor(
//     public readonly nome: string,
//     public readonly sobrenome: string,
//   ) {}
// }

// const empresa = new Empresa('Facebook', '11.111.111/0001-11');
// const colaborador = new Colaborador('Raul', 'Gomes');
// const colaborador1 = new Colaborador('Romeu', 'Carvalho');
// const colaborador2 = new Colaborador('João', 'Costa');
// empresa.adicionaColaborador(colaborador);
// empresa.adicionaColaborador(colaborador1);
// empresa.adicionaColaborador(colaborador2);
// empresa.adicionaColaborador({
//   nome: 'Paulo',
//   sobrenome: 'Alves',
// });
// console.log(empresa);
// empresa.mostraColaborador();

// /* ################# Aula 23/24 ################# */
// export class Pessoa {
//   constructor(
//     public nome: string,
//     public sobrenome: string,
//     private idade: number,
//     protected cpf: string,
//   ) {}

//   getIdade(): number {
//     return this.idade;
//   }

//   getCpf(): string {
//     return this.cpf;
//   }

//   getNomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }
// }

// export class Aluno extends Pessoa {
//   constructor(
//     nome: string,
//     sobrenome: string,
//     idade: number,
//     cpf: string,
//     public sala: string,
//   ) {
//     super(nome, sobrenome, idade, cpf);
//     this.sala = sala;
//   }

//   getNomeCompleto(): string {
//     console.log('FAZENDO ALGO ANTES');
//     return super.getNomeCompleto();
//   }
// }
// export class Cliente extends Pessoa {
//   getNomeCompleto(): string {
//     return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
//   }
// }

// const pessoa = new Pessoa('Raul', 'Gomes', 30, '000.000.000-00');
// const aluno = new Aluno('Romeu', 'Carvalho', 30, '111.111.111-11', '001');
// const cliente = new Cliente('Alfa', 'Alves', 30, '222.222.222-22');

// console.log(pessoa.getNomeCompleto());
// console.log(aluno.getNomeCompleto());
// console.log(cliente.getNomeCompleto());
// console.log(aluno);

// /* ################# Aula 25 ################# */
// export class Empresa {
//   readonly nome: string; //public não necessário
//   protected readonly colaboradores: Colaborador[] = [];
//   private readonly cnpj: string;

//   constructor(nome: string, cnpj: string) {
//     this.nome = nome;
//     this.cnpj = cnpj;
//   }

//   adicionaColaborador(colaborador: Colaborador): void {
//     this.colaboradores.push(colaborador);
//   }
//   mostraColaborador(): void {
//     for (const colaborador of this.colaboradores) {
//       console.log(colaborador);
//     }
//   }
// }

// export class Facebook extends Empresa {
//   constructor() {
//     super('Facebook', '11.111.111/0001-11');
//   }
//   popColaborador(): Colaborador | null {
//     const colaborador = this.colaboradores.pop();
//     if (colaborador) return colaborador;
//     return null;
//   }
// }

// export class Colaborador {
//   constructor(
//     public readonly nome: string,
//     public readonly sobrenome: string,
//   ) {}
// }

// const empresa = new Facebook();
// const colaborador = new Colaborador('Raul', 'Gomes');
// const colaborador1 = new Colaborador('Romeu', 'Carvalho');
// const colaborador2 = new Colaborador('João', 'Costa');
// empresa.adicionaColaborador(colaborador);
// empresa.adicionaColaborador(colaborador1);
// empresa.adicionaColaborador(colaborador2);
// const colaboradorRemovido = empresa.popColaborador();
// console.log(colaboradorRemovido);
// console.log(empresa);

// /* ################# Aula 26 ################# */
// export class Pessoa {
//   constructor(
//     private nome: string,
//     private sobrenome: string,
//     private idade: number,
//     private _cpf: string,
//   ) {
//     this.cpf = _cpf;
//   }

//   set cpf(cpf: string) {
//     console.log('SETTER CHAMADO');
//     this._cpf = cpf;
//   }

//   get cpf(): string {
//     console.log('GETTER CHAMADO');
//     return this._cpf.replace(/\D/g, '');
//   }
// }

// const pessoa = new Pessoa('Raul', 'Gomes', 30, '453.786.746-35');
// pessoa.cpf = '453.786.746-00';
// console.log(pessoa.cpf);

// /* ################# Aula 27 ################# */
// export class Pessoa {
//   static minhaIdade = 25;
//   static meuCpf = '651.849.165-64';

//   constructor(
//     public nome: string,
//     public sobrenome: string,
//     public idade: number,
//     public cpf: string,
//   ) {}

//   normalMethod(): void {
//     console.log(Pessoa.minhaIdade, Pessoa.meuCpf);
//   }

//   static criaPessoa(nome: string, sobrenome: string): Pessoa {
//     return new Pessoa(nome, sobrenome, Pessoa.minhaIdade, Pessoa.meuCpf);
//   }
// }

// const pessoa = new Pessoa('Raul', 'Gomes', 30, '453.786.746-35');
// const pessoa1 = Pessoa.criaPessoa('Maria', 'Carvalho');
// console.log(pessoa);
// console.log(pessoa1);
// pessoa.normalMethod();
// console.log(Pessoa.minhaIdade, Pessoa.meuCpf);

// /* ################# Aula 28 ################# */
// //Singleton - GoF | factory Method -GoF
// export class Database {
//   private static database: Database;
//   private constructor(
//     private host: string,
//     private user: string,
//     private password: string,
//   ) {}

//   connect(): void {
//     console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
//   }

//   static getDatabase(host: string, user: string, password: string): Database {
//     if (Database.database) {
//       console.log('Retornando instância já criada.');
//       return Database.database;
//     }
//     console.log('Criando nova instância.');
//     Database.database = new Database(host, user, password);
//     return Database.database;
//   }
// }

// const db = Database.getDatabase('localhost', 'root', '123456');
// db.connect();
// const db2 = Database.getDatabase('localhost', 'root', '123456');
// db2.connect();

// console.log(db === db2);

// /* ################# Aula 30 ################# */
// export class Escritor {
//   private _ferramenta: Ferramenta | null = null;

//   constructor(private _nome: string) {}

//   get nome(): string {
//     return this._nome;
//   }

//   set ferramenta(ferramenta: Ferramenta | null) {
//     this._ferramenta = ferramenta;
//   }

//   get ferramenta(): Ferramenta | null {
//     return this._ferramenta;
//   }

//   escrever(): void {
//     if (this.ferramenta === null) {
//       console.log('Não posso escrever sem ferramenta...');
//       return;
//     }
//     this.ferramenta.escrever();
//   }
// }

// export abstract class Ferramenta {
//   constructor(private _nome: string) {}
//   abstract escrever(): void;

//   get nome(): string {
//     return this._nome;
//   }
// }

// export class Caneta extends Ferramenta {
//   escrever(): void {
//     console.log(`${this.nome} está escrevendo...`);
//   }
// }

// export class MaquinaEscrever extends Ferramenta {
//   escrever(): void {
//     console.log(`${this.nome} está digitando...`);
//   }
// }

// const escritor = new Escritor('Raul');
// const caneta = new Caneta('Bic');
// const maquinaEscrever = new MaquinaEscrever('Maquina');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaEscrever.nome);

// escritor.ferramenta = caneta;
// escritor.ferramenta = maquinaEscrever;
// escritor.ferramenta = null;
// escritor.escrever();

// /* ################# Aula 31 ################# */
// export class CarrinhoDeCompras {
//   private readonly produtos: Produto[] = [];

//   inserirProdutos(...produtos: Produto[]): void {
//     for (const produto of produtos) {
//       this.produtos.push(produto);
//     }
//   }

//   quantidadeProduto(): number {
//     return this.produtos.length;
//   }

//   valorTotal(): number {
//     return this.produtos.reduce((soma, produto) => soma + produto.valor, 0);
//   }
// }

// export class Produto {
//   constructor(public nome: string, public valor: number) {}
// }
// const produto1 = new Produto('Camiseta', 49.9);
// const produto2 = new Produto('Caneca', 4.9);
// const produto3 = new Produto('Caneta', 0.9);

// const carrinhoDeCompras = new CarrinhoDeCompras();
// carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
// console.log(carrinhoDeCompras.valorTotal());
// console.log(carrinhoDeCompras.quantidadeProduto());

// /* ################# Aula 32 ################# */
// export class Carro {
//   private readonly motor = new Motor();

//   ligar(): void {
//     this.motor.ligar();
//   }

//   acelera(): void {
//     this.motor.acelera();
//   }

//   parar(): void {
//     this.motor.parar();
//   }

//   desligar(): void {
//     this.motor.desligar();
//   }
// }

// export class Motor {
//   ligar(): void {
//     console.log('Motor está ligado...');
//   }

//   acelera(): void {
//     console.log('Motor está acelerando...');
//   }

//   parar(): void {
//     console.log('Motor está parando...');
//   }

//   desligar(): void {
//     console.log('Motor está desligando...');
//   }
// }

// const carro = new Carro();
// carro.ligar();
// carro.acelera();
// carro.parar();
// carro.desligar();

// /* ################# Aula 33 ################# */
// type TipoNome = {
//   nome: string;
// };

// type TipoSobrenome = {
//   sobrenome: string;
// };

// type TipoNomeCompleto = {
//   nomeCompleto: () => string;
// };

// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

// export class Pessoa implements TipoPessoa {
//   constructor(public nome: string, public sobrenome: string) {}

//   nomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }
// }

// const pessoa = new Pessoa('Raul', 'Gomes');
// console.log(pessoa.nomeCompleto());

// /* ################# Aula 33 ################# */
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
