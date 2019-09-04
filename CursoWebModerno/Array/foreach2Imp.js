Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this, this[i].length)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Marineide', 'Danielsinho', 'Jabiroaldo']

aprovados.forEach2(function(nome, indice, tipo, tamanho){
    let nomes = `${indice + 1}) ${nome}, possui ${tamanho} letras.`
    console.log(nomes)
})



