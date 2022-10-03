/* ################# Aula 37 ################# */
export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo = 'pessoa' as const;
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  //if ('nome' in obj) console.log(obj.nome);
  //if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso e um animal', obj.cor);
      return;
  }
}

mostraNome(new Aluno('Raul'));
mostraNome({ tipo: 'animal', cor: 'Rosa' });

/* ################# Aula 38 ################# */
type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCore(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCore('vermelho', coresObj));
console.log(traduzirCore('verde', coresObj));
console.log(traduzirCore('roxo', coresObj));

/* ################# Aula 39 ################# */
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

/* ################# Aula 40 ################# */
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

/* ################# Aula 41 ################# */
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));

/* ################# Aula 42 ################# */
//Encadeamento opcional e Operacional de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  data: new Date(),
};

console.log(' ' ?? '1-Ixi, não existe.');
console.log(documento.data?.toDateString() ?? '2-Ixi, não existe.');
console.log(undefined ?? '3-Ixi, não existe.');
console.log(false ?? '4-Ixi, não existe.');
console.log(null ?? '5-Ixi, não existe.');
console.log(0 ?? '6-Ixi, não existe.');
