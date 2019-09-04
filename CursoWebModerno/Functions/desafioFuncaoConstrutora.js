// A partir de uma classe
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()


// Por função Factory
function Pessoa2(nome) {
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}
const p2 = new Pessoa2('Dolinho')
p2.falar()




