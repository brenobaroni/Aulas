var numeroDigitado = document.querySelector('input#number')
var listaDeNumeros = document.querySelector('select#numbersList')

var divtotalDeNumeros = document.querySelector('div#totalDeNumeros')
var divMaiorNumero = document.querySelector('div#maiorNumero')
var divMenorNumero = document.querySelector('div#menorNumero')
var divSomaDosNumeros = document.querySelector('div#somaDosNumeros')
var divMediaDosNumeros = document.querySelector('div#mediaDosNumeros')

var arrayDeNumero = []
var maiorNumero = 0
var menorNumero
var somaDosNumeros = Number(0)
var mediaDosNumeros = 0.0

function adicionarNumero(){
    somaDosNumeros = Number(0)

    if(numeroDigitado.value <= 0 || numeroDigitado.value > 100){
        alert(`O Numero deve ser maior que "0" e menor que 100!`)
        return false
    }

    if(arrayDeNumero.length == 0){
        maiorNumero = numeroDigitado.value
        menorNumero = numeroDigitado.value
    }

    if(arrayDeNumero.indexOf(numeroDigitado.value) == -1){
        listaDeNumeros.appendChild( new Option(numeroDigitado.value) )
        arrayDeNumero.push(numeroDigitado.value)

        if(numeroDigitado.value > Number(maiorNumero)){
            maiorNumero = numeroDigitado.value
        }
        if(numeroDigitado.value < Number(menorNumero)){
            menorNumero = numeroDigitado.value
        }
    }else{
        alert(`O Número "${numeroDigitado.value}" já existe na lista.`)
    }  
}

function finalizar(){
    if(arrayDeNumero.length == 0){
        alert(console.log(`Você deve digitar um número antes de fializar.`))
    } 
    
    for(i = 0; i < arrayDeNumero.length; i++){
        somaDosNumeros += Number(arrayDeNumero[i])
    }

    mediaDosNumeros = somaDosNumeros / arrayDeNumero.length

    divtotalDeNumeros.innerHTML = `Total de números digitado = ${arrayDeNumero.length}`
    divMaiorNumero.innerHTML = `Maior Número Digitado = ${maiorNumero}`
    divMenorNumero.innerHTML = `Menor Número Digitado = ${menorNumero}`
    divSomaDosNumeros.innerHTML = `Soma dos Números Digitados = ${somaDosNumeros}`
    divMediaDosNumeros.innerHTML = `A média dos Números Digitados = ${mediaDosNumeros}`
}


somar = (x,y) => { return x += y}
