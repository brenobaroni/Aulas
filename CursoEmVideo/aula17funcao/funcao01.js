function parimpar(n) {
    if(n%2 == 0)
    console.log(`O Número ${n} é par!`)
    else
    console.log(`O Número ${n} é impar!`)
}

console.log(parimpar(5))

let v = function(x){
    return console.log(`${x} + 1 = ${x + 1}`)
}

v(2)
//let var = nomeDaVariável = (param) => return

let x = soma = (x,y) => console.log(`A soma de ${x} + ${y} = ${x + y}`)

function fatorial(n){
    let fat = 1
    while( n > 1){
        fat *= n
        n--
    }
    return fat
}

function fatorial2(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial2(n-1)
    }
}

console.log(fatorial(5))
console.log(fatorial2(5))