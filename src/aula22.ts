// /* ################# Aula 43 ################# */
// type FilterCallback<U> = (valor: U, index?: number, array?: U[]) => boolean;

import { type } from 'os';

// export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
//   const novoArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callbackfn(array[i])) {
//       novoArray.push(array[i]);
//     }
//   }
//   return novoArray;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a'];

// const arrayFiltrandoOriginal = array.filter((value) => value < 5);
// console.log(arrayFiltrandoOriginal);

// const arrayFiltrando = meuFilter(array, (value) => value < 5);
// console.log(arrayFiltrando);

// /* ################# Aula 44 ################# */
// type MeuTipo = number;

// const arrayNumber: Array<number> = [1, 2, 3, 4, 5];
// console.log(arrayNumber);

// async function promiseAsync() {
//   return 1;
// }

// function minhaPromise(): Promise<MeuTipo> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// }

// promiseAsync().then((resultado) => console.log(resultado + 1));
// minhaPromise().then((resultado) => console.log(resultado + 1));

/* ################# Aula 45 ################# */
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo2<string, number> = {
  nome: 'Raul',
  sobrenome: 'Gomes',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 31,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Romeu',
  sobrenome: 'Carvalho',
  idade: 32,
};
console.log(aluno1, aluno2, aluno3);
