let num = []

num.push(4,5,6,6,87,8,9)

console.log(`${num}`)

console.log(`Tamanho do array num: ${num.length} posições. `)

num.sort() //Ordena.

/*
for(let i = 0; i < num.length; i++){
    console.log(`Posição ${i + 1}. ${num[i]}`)
}
*/

for(let pos in num ){
    console.log(`Posição ${Number(pos) + 1}. ${num[pos]}`)
}

//Porcura no valor
num.indexOf(7)