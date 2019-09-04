const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)




fabricantes.forEach((name, index) => {console.log(`${index + 1}. ${name}`)})