/* eslint-disable @typescript-eslint/no-namespace */
// /* ################# Aula 59/60 ################# */
// namespace MeuNamespace {
//   export const nameDoNamespace = 'Raul';

//   export class PessoaDoNamespace {
//     constructor(public nome: string) {}
//   }

//   const pessoa = new PessoaDoNamespace('Raul');
//   console.log(pessoa);

//   export namespace OutroNamespace {
//     export const nomeDoNamespace = 'Nome do outro namespace';
//   }
// }

// const constDoNamespace = 'Valor da const do namespace';
// const pessoa = new MeuNamespace.PessoaDoNamespace('Raul');
// console.log(pessoa);
// console.log(MeuNamespace.nameDoNamespace);
// console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
// /* ####### IMPORT NO TypeScript ####### */
// //npx tsc src/aula24.ts --outFile src/aula24.js
// /// <reference path="modulo.ts" />

// /* ################# Aula 61 ################# */
import { soma } from './aula24.js';
const result = soma(10, 20) as number;
console.log(result);

/* ####### IMPORT NO JavaScript ####### */
export function soma(x, y) {
  return x + y;
}
