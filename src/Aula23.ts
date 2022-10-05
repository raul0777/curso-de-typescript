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
interface Constructor {
  new (...args: any[]): any;
}
function inverteNomeCor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
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

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador' + param1);
    return target;
  };
}
@outroDecorador('O parâmetro do outro decorador') //2
@inverteNomeCor('Outra coisa', 'Valor2') //1
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('romeu', 'roxo');
console.log(animal);
