/* eslint-disable @typescript-eslint/no-namespace */
/* ################# Aula 60 ################# */
namespace MeuNamespace {
  export const nameDoNamespace = 'Raul';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Raul');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome do outro namespace';
  }
}

const pessoa = new MeuNamespace.PessoaDoNamespace('Raul');
console.log(pessoa);
console.log(MeuNamespace.nameDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

export default 1;
