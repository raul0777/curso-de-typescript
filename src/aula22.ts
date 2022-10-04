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

// /* ################# Aula 45 ################# */
// interface PessoaProtocolo<T = string, U = number> {
//   nome: T;
//   sobrenome: T;
//   idade: U;
// }

// type PessoaProtocolo2<T = string, U = number> = {
//   nome: T;
//   sobrenome: T;
//   idade: U;
// };

// const aluno1: PessoaProtocolo2<string, number> = {
//   nome: 'Raul',
//   sobrenome: 'Gomes',
//   idade: 30,
// };

// const aluno2: PessoaProtocolo<number, number> = {
//   nome: 123,
//   sobrenome: 456,
//   idade: 31,
// };

// const aluno3: PessoaProtocolo2 = {
//   nome: 'Romeu',
//   sobrenome: 'Carvalho',
//   idade: 32,
// };
// console.log(aluno1, aluno2, aluno3);

// /* ################# Aula 46 ################# */
// type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

// const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

// const animal = {
//   cor: 'Rosa',
//   vacina: ['Vacina 1,', 'Vacina 2'],
//   idade: 10,
// };

// const vacinas = obterChave(animal, 'vacina');
// const cor = obterChave(animal, 'cor');

// console.log(vacinas, cor, obterChave(animal, 'idade'));

// /* ################# Aula 47 ################# */
// export class Pessoa<T, U> {
//   constructor(public nome: T, public idade: U) {}
// }
// export class Pilha<T> {
//   private contador = 0;
//   private elemento: { [k: number]: T } = {};

//   push(elemento: T): void {
//     this.elemento[this.contador] = elemento;
//     this.contador++;
//   }

//   pop(): T | void {
//     if (this.estaVazia()) return undefined;

//     this.contador--;
//     const elemento = this.elemento[this.contador];
//     delete this.elemento[this.contador];
//     return elemento;
//   }

//   estaVazia(): boolean {
//     return this.contador === 0;
//   }

//   tamanho(): number {
//     return this.contador;
//   }
//   mostraPilha(): void {
//     for (const chave in this.elemento) {
//       console.log(this.elemento[chave]);
//     }
//   }
// }

// const pilha = new Pilha<number | string>();
// pilha.push(1);
// pilha.push(2);
// pilha.push(3);
// pilha.push(4);
// pilha.push('string');

// while (!pilha.estaVazia()) {
//   console.log(pilha.pop());
// }

// /* ################# Aula 48 ################# */
// export function unirObjetos<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
//   //return { ...obj1, ...obj2 };
//   return Object.assign({}, obj1, obj2);
// }

// const obj1 = { chave1: 'valor1' };
// const obj2 = { chave2: 'valor2' };
// const juntar = unirObjetos(obj1, obj2);
// console.log(juntar);

// /* ################# Aula 49 ################# */
// export function isNumber(value: unknown): value is number {
//   return typeof value === 'number';
// }

// export function soma<T>(...args: T[]): number | null {
//   const retorno = args.reduce((sum, value) => {
//     if (isNumber(sum) && isNumber(value)) {
//       return sum + value;
//     }
//     return sum;
//   }, 0);
//   return retorno;
// }

// console.log(soma(1, 2, 3));
// console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1]));
// console.log(soma('a', 'b', 'c'));

// /* ################# Aula 50 ################# */
// //Record
// const objeto1: Record<string, string | number> = {
//   nome: 'Raul',
//   sobrenome: 'Gomes',
//   idade: 30,
// };

// console.log(objeto1);

// type PessoaProtocol = {
//   nome?: string;
//   sobrenome?: string;
//   idade?: number;
// };

// //Required ~ Transforma tudo que opcional em obrigatório.
// type PessoaRequired = Required<PessoaProtocol>;
// //Required ~ Transforma tudo que obrigatório em opcional.
// type PessoaPartial = Partial<PessoaRequired>;
// //Readonly
// type PessoaReadonly = Readonly<PessoaRequired>;
// //Pick ~ Escolhe as chaves que eu quero do objeto.
// type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

// const objeto2: PessoaReadonly = {
//   nome: 'Romeu',
//   sobrenome: 'Carvalho',
//   idade: 31,
// };
// console.log(objeto2);

// //Extract e Exclude
// type ABC = 'A' | 'B' | 'C';
// type CDE = 'C' | 'D' | 'E';
// type TipoExclude = Exclude<ABC, CDE>;
// type TipoExtract = Extract<ABC, CDE>;

// //
// type AccountMongo = {
//   _id: string;
//   nome: string;
//   sobrenome: string;
//   idade: number;
// };

// type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
//   id: string;
// };

// const accountMongo: AccountMongo = {
//   _id: '06179',
//   nome: 'Raul',
//   sobrenome: 'Gomes',
//   idade: 30,
// };

// function mapAccount(accountMongo: AccountMongo): AccountApi {
//   const { _id, ...accountData } = accountMongo;
//   return { ...accountData, id: _id };
// }

// const accountApi = mapAccount(accountMongo);
// console.log(accountApi);

// //module mode
// export default 1;

// /* ################# Exercício ################# */
/* Qual sua linguagem de programação favorita?
Python
JavaScript
TypeScript
###

Qual sua cor favorita?
Vermelho
Verde
azul */

type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Voting {
  private _votingOptions: VotingOption[] = [];
  constructor(public details: string) {}

  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption);
  }

  vote(votingIndex: number): void {
    if (!this._votingOptions[votingIndex]) return;
    this._votingOptions[votingIndex].numberOfVotes += 1;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private voting: Voting[] = [];

  addVoting(voting: Voting): void {
    this.voting.push(voting);
  }

  showVoting(): void {
    for (const votes of this.voting) {
      console.log(votes.details);
      for (const votingOption of votes.votingOptions) {
        console.log(votingOption.option, votingOption.numberOfVotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const voting1 = new Voting('Qual sua linguagem de programação favorita?');
voting1.addVotingOption({ option: 'Python', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'JavaScript', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'TypeScript', numberOfVotes: 0 });
voting1.vote(1);
voting1.vote(1);
voting1.vote(0);
voting1.vote(0);
voting1.vote(0);
voting1.vote(2);

const voting = new Voting('Qual sua cor favorita?');
voting.addVotingOption({ option: 'Vermelho', numberOfVotes: 0 });
voting.addVotingOption({ option: 'Verde', numberOfVotes: 0 });
voting.addVotingOption({ option: 'Azul', numberOfVotes: 0 });
voting.vote(1);
voting.vote(1);
voting.vote(0);
voting.vote(0);
voting.vote(0);
voting.vote(2);

const votingApp = new VotingApp();
votingApp.addVoting(voting1);
votingApp.addVoting(voting);

votingApp.showVoting();
