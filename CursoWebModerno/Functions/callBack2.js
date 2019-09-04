const notas = [7.7, 6.5, 5.2, 8.9, 7.1, 6.3, 2]


//Sem CallBack
let notasBaixas1 = []
for(let i in notas){
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com CallBack
notasbaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasbaixas2)

//CallBack Enxuto
var notasbaixas3 = notas.filter(nota => nota < 7 && nota > 2)
console.log(notasbaixas3)