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
// interface Constructor {
//   new (...args: any[]): any;
// }
// function inverteNomeCor(param1: string, param2: string) {
//   return function <T extends Constructor>(target: T): T {
//     console.log('Sou o decorador e recebi', target);
//     return class extends target {
//       cor: string;
//       nome: string;

//       constructor(...args: any[]) {
//         super(...args);
//         this.nome = this.inverte(args[0]);
//         this.cor = this.inverte(args[1]);
//       }

//       inverte(valor: string): string {
//         return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
//       }
//     };
//   };
// }

// function outroDecorador(param1: string) {
//   return function (target: Constructor) {
//     console.log('Sou o outro decorador' + param1);
//     return target;
//   };
// }
// @outroDecorador('O parâmetro do outro decorador') //2
// @inverteNomeCor('Outra coisa', 'Valor2') //1
// export class Animal {
//   constructor(public nome: string, public cor: string) {
//     console.log('Sou a classe');
//   }
// }

// const animal = new Animal('romeu', 'roxo');
// console.log(animal);
// /* ################# Aula 55 ################# */
// function decorador(
//   classPrototype: any,
//   nomeMethod: string,
//   descriptor: PropertyDescriptor,
// ): PropertyDescriptor | void {
//   console.log(classPrototype);
//   console.log(nomeMethod);
//   console.log(descriptor);
//   return {
//     value: function (...args: string[]) {
//       return args[0].toUpperCase();
//     },
//   };
// }

// export class UmaPessoa {
//   nome: string;
//   sobrenome: string;
//   idade: number;

//   constructor(nome: string, sobrenome: string, idade: number) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//   }

//   @decorador
//   method(msg: string): string {
//     return `${this.nome} ${this.sobrenome}: ${msg}`;
//   }

//   get nomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }

//   set nomeCompleto(valor: string) {
//     const palavras = valor.split(/\s+/g);
//     const primeiroNome = palavras.shift();
//     if (!primeiroNome) return;
//     this.nome = primeiroNome;
//     this.sobrenome = palavras.join(' ');
//   }
// }

// const pessoa = new UmaPessoa('Raul', 'Gomes', 30);
// const method = pessoa.method('Hello world');
// console.log(method);

// /* ################# Aula 56 ################# */
// function decorador(
//   classPrototype: any,
//   nomeMethod: string | symbol,
//   index: number,
// ): any {
//   console.log(classPrototype);
//   console.log(nomeMethod);
//   console.log(index);
// }

// export class UmaPessoa {
//   nome: string;
//   sobrenome: string;
//   idade: number;

//   constructor(
//     @decorador nome: string,
//     @decorador sobrenome: string,
//     @decorador idade: number,
//   ) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//   }

//   method(@decorador msg: string): string {
//     return `${this.nome} ${this.sobrenome}: ${msg}`;
//   }

//   get nomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }

//   set nomeCompleto(valor: string) {
//     const palavras = valor.split(/\s+/g);
//     const primeiroNome = palavras.shift();
//     if (!primeiroNome) return;
//     this.nome = primeiroNome;
//     this.sobrenome = palavras.join(' ');
//   }
// }

// const pessoa = new UmaPessoa('Raul', 'Gomes', 30);
// const method = pessoa.method('Hello world');
// console.log(method);

// /* ################# Aula 57 ################# */
// function decorador(classPrototype: any, nome: string | symbol): any {
//   let valorPropriedade: any;
//   return {
//     get: () => valorPropriedade,
//     set: (valor: any) => {
//       if (typeof valor === 'string') {
//         valorPropriedade = valor.split('').reverse().join('');
//         return;
//       }
//       valorPropriedade = valor;
//     },
//   };
// }

// export class UmaPessoa {
//   @decorador
//   nome: string;
//   @decorador
//   sobrenome: string;
//   @decorador
//   idade: number;

//   constructor(nome: string, sobrenome: string, idade: number) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//   }

//   method(msg: string): string {
//     return `${this.nome} ${this.sobrenome}: ${msg}`;
//   }

//   get nomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }

//   set nomeCompleto(valor: string) {
//     const palavras = valor.split(/\s+/g);
//     const primeiroNome = palavras.shift();
//     if (!primeiroNome) return;
//     this.nome = primeiroNome;
//     this.sobrenome = palavras.join(' ');
//   }
// }

// const pessoa = new UmaPessoa('Raul', 'Gomes', 30);
// const method = pessoa.method('Hello world');
// console.log(method);

// /* ################# Aula 58 ################# */
// Tipo do construtor da classe
type Constructor = new (...args: any[]) => any;

// Classes
function decoradorDeClasse(construtor: Constructor): any {
  // Chamado na criação da classe
  console.log('CLASSE');
  console.log(construtor);
  console.log('###');

  // Retorno pode ser omitido
  return class extends construtor {
    // faça o que desejar
  };
}

// Método de instância (normal)
function decoradorDeMetodo(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO NORMAL');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // value altera o retorno original:
    // value: (...args: any[]) => console.log(args),
    writable: true,
    enumerable: true,
    configurable: true,
  };
}

// Método estático
function decoradorDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Parâmetro de método
function decoradorDeParametroDeMetodo(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {
  // Chamado na criação do método
  console.log('PARÂMETRO DE MÉTODO');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');

  // Retorno é ignorado
}

// Parâmetro de método estático
function decoradorDeParametroDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {
  // Chamado na criação do parâmetro (não precisa chamar o método)
  console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');

  // Retorno é ignorado
}

// Propriedade
function decoradorDePropriedade(
  prototipoDaClasse: any,
  nomePropriedade: string,
): any {
  // Chamado na criação da propriedade
  console.log('DECORADOR DE PROPRIEDADE');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log('###');

  // Retorno pode ser omitido
  // Use get e set para manipular o valor da propriedade
  let valorPropriedade: any;
  return {
    enumerable: true,
    configurable: true,
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      valorPropriedade = valor;
    },
  };
}

// Propriedade estática
function decoradorDePropriedadeEstatica(
  classConstructor: any,
  nomePropriedade: string,
): any {
  // Chamado na criação da propriedade estática
  console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter
function decoradorDeGetterESetterNormal(
  prototipoDaClasse: any,
  nomePropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER normal');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log(descritorDePropriedade);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter estático
function decoradorDeGetterESetterEstatico(
  classConstructor: Constructor,
  nomePropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER estático');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log(descritorDePropriedade);
  console.log('###');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// A classe e o uso dos decorators

@decoradorDeClasse
export class UmaPessoa {
  @decoradorDePropriedade
  nome: string;
  sobrenome: string;
  idade: number;

  @decoradorDePropriedadeEstatica
  static propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA';

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decoradorDeMetodo
  metodo(@decoradorDeParametroDeMetodo msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  @decoradorDeMetodoEstatico
  static metodoEstatico(
    @decoradorDeParametroDeMetodoEstatico msg: string,
  ): string {
    return UmaPessoa.propriedadeEstatica + ' - ' + msg;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  @decoradorDeGetterESetterNormal
  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }

  @decoradorDeGetterESetterEstatico
  static get staticPropertyGetterSetter(): string {
    return UmaPessoa.propriedadeEstatica;
  }

  static set staticPropertyGetterSetter(value: string) {
    UmaPessoa.propriedadeEstatica = value;
  }
}

// Uso da classe

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
pessoa.nomeCompleto = 'João Silva Oliveira';
const metodo = pessoa.metodo('Olá mundo!');
const metodoEstatico = UmaPessoa.metodoEstatico('Olá mundo!');
console.log(pessoa);
console.log(metodo);
console.log(metodoEstatico);
console.log(UmaPessoa.propriedadeEstatica);
