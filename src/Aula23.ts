// /* ################# Aula 51 ################# */
// @decorator
// export class Animal {
//   constructor(public nome: string, public cor: string) {}
// }

// function decorator<T extends new (...args: any[]) => any>(target: T): T {
//   return class extends target {
//     cor: string;
//     nome: string;

//     constructor(...args: any[]) {
//       super(...args);
//       this.nome = this.inverte(args[0]);
//       this.cor = this.inverte(args[1]);
//     }

//     inverte(valor: string): string {
//       return valor.split('').reverse().join('');
//     }
//   };
// }

// const animal = new Animal('romeu', 'roxo');
// console.log(animal);

// /* ################# Aula 52 ################# */
// function inverteNomeCor<T extends new (...args: any[]) => any>(target: T): T {
//   console.log('Sou o decorador e recebi', target);
//   return class extends target {
//     cor: string;
//     nome: string;

//     constructor(...args: any[]) {
//       super(...args);
//       this.nome = this.inverte(args[0]);
//       this.cor = this.inverte(args[1]);
//     }

//     inverte(valor: string): string {
//       return valor.split('').reverse().join('');
//     }
//   };
// }

// @inverteNomeCor
// export class Animal {
//   constructor(public nome: string, public cor: string) {
//     console.log('Sou a classe');
//   }
// }

// const animal = new Animal('romeu', 'roxo');
// console.log(animal);

// /* ################# Aula 53 ################# */
function inverteNomeCor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorador e recebi', target);
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@inverteNomeCor('Outra coisa', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('romeu', 'roxo');
console.log(animal);
