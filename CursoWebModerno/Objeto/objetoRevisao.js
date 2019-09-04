const produto = new Object

produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua dos Papagaios',
            numero: 157,
            cep: '037260-060'
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // .......
    }
}

carro.proprietario.endereco.numero = 1000
