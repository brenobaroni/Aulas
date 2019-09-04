console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola7'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
}

const objeto = new Obj('Ragatanga')
console.log(objeto.nome)
