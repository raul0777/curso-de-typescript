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
// type Veiculo = {
//   marca: string;
//   ano: number;
// };

// type Car = {
//   brand: Veiculo['marca'];
//   year: Veiculo['ano'];
//   name: string;
// };

// const carro: Car = {
//   brand: 'Ford',
//   year: 2020,
//   name: 'ka',
// };

// console.log(carro);

// /* ################# Aula 40 ################# */
export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
calculadora.add(5).mul(2).div(2).sub(5).pow(2);
console.log(calculadora);

//Builder -GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); //Builder
request.setUrl('http://www.google.com').setMethod('post').send();
