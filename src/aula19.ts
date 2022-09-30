/* ################# Aula 01 ################# */
// eslint-disable
// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Raul'; //Qualquer tipo de strings: '' "" ``
let idade: number = 30; //10, 1.57, -5.55, 0xf00d, 0o7744
let adulto: boolean = true; //true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
let big: bigint = 10n; //bigint

import exp from 'constants';
import { type } from 'os';

//Arrays
let arrayDeNumero: Array<number> = [1, 2, 3];
let arrayDeNumero2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

//Objetos
let pessoa1: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: 'Raul',
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

/* ################# Aula 02 ################# */
//Utilize any apena em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('olá'));
console.log(showMessage(1));

/* ################# Aula 03 ################# */
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Raul',
  sobrenome: 'Gomes',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Raul', 'Gomes');
pessoa.exibirNome();

export { pessoa };

/* ################# Aula 04 ################# */
const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

/* ################# Aula 05 ################# */
//Array<T> ~ T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toLocaleUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenação = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenação);
console.log(upper);

/* ################# Aula 06 ################# */
//Tuple
const dadosCliente: readonly [number, string] = [1, 'Raul'];
const dadosCliente1: [number, string, string] = [1, 'Raul', 'Gomes'];
const dadosCliente2: [number, string, string?] = [1, 'Raul'];
const dadosCliente3: [number, ...string[]] = [1, 'Raul', 'Gomes'];

dadosCliente[0] = 100;
dadosCliente3[2] = 'Carvalho';

console.log(dadosCliente);
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

//readonly array
const array: readonly string[] = ['Raul', 'Gomes'];
const array1: ReadonlyArray<string> = ['Raul', 'Carvalho'];

console.log(array);
console.log(array1);

/* ################# Aula 07 ################# */
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber == null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}

/* ################# Aula 08 ################# */
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();

/* ################# Aula 09 ################# */
enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA, //202
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);

/* ################# Aula 10 ################# */
let x: unknown;

x = 100;
x = 'Raul';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);

/* ################# Aula 11 ################# */
function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat(true, false));

/* ################# Aula 12 ################# */
let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; //eslint-disable-line

const pessoa = {
  nome: 'Raul' as const,
  sobrenome: 'Gomes',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'));

//Module mode
export default 1;

/* ################# Aula 13 ################# */
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; //OR
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'; //OR
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Raul',
  salario: 4_300,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);

/* ################# Aula 14 ################# */
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; //AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Intersection = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Raul',
  sobrenome: 'Gomes',
  idade: 30,
};

console.log(pessoa);

//Module mode
export { pessoa };

/* ################# Aula 15 ################# */
type MapStringsCallback = (item: string) => string;

export function mapString(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);

/* ################# Aula 16 ################# */
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, setValue) => {
  return (
    user.username === setValue.username && user.password === setValue.password
  );
};

const bdUser = { username: 'Raul', password: '123456' };
const sentUser = { username: 'João', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

/* ################# Aula 17 ################# */
/* RECOMENDADO */
//Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

//Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* NÃO RECOMENDADO */
//Type assertion
const body3 = document.querySelector('body') as unknown as number;

//Non-null assertion (!)
const body1 = document.querySelector('body')!;
body1.style.background = 'red';

/* ################# Aula 18 ################# */
export default (): void => {
  console.log('Sou o módulo.');
};

/* ################################ */

import occupation from './mod';

occupation();

/* ################# Aula 19 ################# */
##########EXERCÍCIO##########
import './form-controla';
/* ################# Aula 20 ################# */
export function função(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

função.call(new Date(), 'Raul', 30);
função.apply(new Date(), ['Raul', 30]);
