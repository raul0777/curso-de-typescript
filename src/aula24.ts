/* eslint-disable @typescript-eslint/no-namespace */
/* ################# Aula 59/60 ################# */
namespace MeuNamespace {
  export const nameDoNamespace = 'Raul';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Raul');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome do outro namespace';
  }
}

const constDoNamespace = 'Valor da const do namespace';
const pessoa = new MeuNamespace.PessoaDoNamespace('Raul');
console.log(pessoa);
console.log(MeuNamespace.nameDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
/* ####### IMPORT NO TypeScript ####### */
//npx tsc src/aula24.ts --outFile src/aula24.js
/// <reference path="modulo.ts" />

/* ################# Aula 61 ################# */
import { soma } from './aula24.js';
const result = soma(10, 20) as number;
console.log(result);

/* ####### IMPORT NO JavaScript ####### */
export function soma(x, y) {
  return x + y;
}

/* ################# Aula 62 ################# */
/* npm i lodash,
"@types/lodash": "4.14.186" */
import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('raul@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5]));

/* ################# Aula 63 ################# */
import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

const array = [100, 200, 300, 400];

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));

/* ####### BIBLIOTECA DO LODASH #######
CRIE UM ARQUIVO COM A EXTENSÃO "-file.d.ts" */
declare namespace _ {
  interface loDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MINHAGLOBAL: string;
  }
}
