// criar funcao forma literal
function fun1(){}

//Armazenando Funcao
const fun2 = function fun2() {}

//Armazenando funcao no array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Dale'}
console.log(obj.falar())

// PAssar funcao com param
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//Uma funcao pode retornar/conter uma funcao
function soma(a,b) {
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)


