function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
console.log(aula1)


//Simulando New

function novo(f , ...parans) { //
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, parans)
    return obj
}

const aula2 = novo(Aula, 'Bem Vindo', 123)
const aula3 = novo(Aula, 'Até Breve', 456)

console.log(aula2)
