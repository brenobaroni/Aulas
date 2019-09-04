// novo recurso ES2015


const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua trab',
        numero: 1000
    }

}

const { nome, idade } = pessoa //tirar
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)