var idade = 19

if(idade < 16){
    console.log('Não Vota')
}else if(idade >= 16 && idade < 18){
    console.log('Voto não obrigatorio')
}else{
    console.log('Voto obrigatorio')
}

var agora = new Date
var horaAtual = agora.getHours()
var minutosAtual = agora.getMinutes()

console.log(`${horaAtual}:${minutosAtual}`)