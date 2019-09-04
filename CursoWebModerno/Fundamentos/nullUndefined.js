let valor // nao inicializada
console.log(valor)

let valor = 10.30

//console.log(valor.toString()) // Erro

valor = null //ausência de valor

//console.log(valor.toString())

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(!!produto)
produto.preco = undefined