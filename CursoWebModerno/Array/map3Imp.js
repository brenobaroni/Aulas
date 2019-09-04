Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i =0; i < this.length; i++){
        newArray.push(callback(this[i]))
    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Lápis", "preco": 3.00 }',
    '{"nome": "Caderno", "preco": 12.45 }'
]

const tranformarEmObjeto = e => JSON.parse(e)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(tranformarEmObjeto).map2(apenasPreco)


console.log(resultado)