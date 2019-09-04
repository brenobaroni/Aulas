const aprovados = ['Agatha', 'Aldo', 'Marineide', 'Danielsinho', 'Jabiroaldo']

aprovados.forEach(function(nome, indice){
    let nomes = `${indice + 1}) ${nome}`
    console.log(nomes)
})


aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

const exibirAprovados = (aprovado, indice) => console.log(`${indice + 1}. ${aprovado}`)

aprovados.forEach(exibirAprovados)

