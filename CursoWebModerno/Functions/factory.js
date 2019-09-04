//Factory Simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}