export default class Funcionario {
    nome: string;
    comissao: number;

    constructor(n: string, c: number){
        this.nome = n;
        this.comissao = c;
    }

    public getNome(){
        return this.nome;
    }

    public setNome(nome: string): string{
        return this.nome = nome;
    }

    public getComissao(){
        return this.comissao;
    }

    public setComissao(comissao: number): number{
        return this.comissao = comissao;
    }
}