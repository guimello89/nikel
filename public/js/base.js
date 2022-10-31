const nome = "Guilherme";
let nome2 = "";
let pessoaDefault = {
    nome: "Guilherme",
    idade: "20",
    trabalho: "Desenvolvedor"
}

let nomes = ["Guilherme", "Tia Silva", "Don Juan"];

let possoasListaVazia = [];

let pessoas = [
        {
            nome: "Guilherme",
            idade: "20",
            trabalho: "Desenvolvedor"
        },
        {
            nome: "Maria Silva",
            idade: "25",
            trabalho: "Faxineira"
        }    
];


function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(nomeNovo) {
    nome2 = nomeNovo;
    console.log("Valor alterado recenbendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adcionarPessoa(pesssoa) {
    pessoas.push(pessoas);
}

function imprimirPessoas() {
    console.log("-----IMPRIMIR PESSOAS-----");
    pessoas.forEach((item) => {
       console.log("Nome:");
       console.log(item.nome);

        console.log("Idade:");
       console.log(item.idade);

       console.log("Trabalho:");
       console.log(item.trabalho);
    })}

imprimirPessoas();

adcionarPessoa({
    nome: "Seu Ze",
    idade: "39",
    trabalho: "Pintor"
});

imprimirPessoas();
