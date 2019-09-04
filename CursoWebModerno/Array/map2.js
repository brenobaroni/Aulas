const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Lápis", "preco": 3.00 }',
    '{"nome": "Caderno", "preco": 12.45 }'
]

const tranformarEmObjeto = e => JSON.parse(e)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(tranformarEmObjeto).map(apenasPreco)


console.log(resultado)