// /* ################# Aula 37 ################# */
// export function add(a: unknown, b: unknown): number | string {
//   return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
// }

// console.log(add(1, 5));
// console.log(add('a', 'b'));

// type Pessoa = { tipo: 'pessoa'; nome: string };
// type Animal = { tipo: 'animal'; cor: string };
// type PessoaOuAnimal = Pessoa | Animal;

// export class Aluno implements Pessoa {
//   tipo = 'pessoa' as const;
//   constructor(public nome: string) {}
// }

// function mostraNome(obj: PessoaOuAnimal): void {
//   //if ('nome' in obj) console.log(obj.nome);
//   //if (obj instanceof Aluno) console.log(obj.nome);
//   switch (obj.tipo) {
//     case 'pessoa':
//       console.log(obj.nome);
//       return;
//     case 'animal':
//       console.log('Isso e um animal', obj.cor);
//       return;
//   }
// }

// mostraNome(new Aluno('Raul'));
// mostraNome({ tipo: 'animal', cor: 'Rosa' });

// /* ################# Aula 38 ################# */
// type CoresObj = typeof coresObj;
// type CoresChaves = keyof CoresObj;

// const coresObj = {
//   vermelho: 'red',
//   verde: 'green',
//   azul: 'blue',
//   roxo: 'purple',
// };

// function traduzirCore(cor: CoresChaves, cores: CoresObj) {
//   return cores[cor];
// }

// console.log(traduzirCore('vermelho', coresObj));
// console.log(traduzirCore('verde', coresObj));
// console.log(traduzirCore('roxo', coresObj));

// /* ################# Aula 39 ################# */
type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'ka',
};

console.log(carro);
