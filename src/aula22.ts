// /* ################# Aula 43 ################# */
// type FilterCallback<U> = (valor: U, index?: number, array?: U[]) => boolean;

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

/* ################# Aula 44 ################# */
type MeuTipo = number;

const arrayNumber: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNumber);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
