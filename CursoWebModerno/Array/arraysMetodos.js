const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //passa quebrou o carro

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elemntos


//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1) //massa quebrou de novo
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(4) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1 ,3) //vai até o indice 3 mas sem inclui-lo
console.log(algunsPilotos2[0])
