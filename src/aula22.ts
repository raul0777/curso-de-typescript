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
