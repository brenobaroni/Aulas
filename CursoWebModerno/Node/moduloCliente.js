/*Esta classe utiliza outros Módulos*/
//#Importação dos Módulos
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

//#Chamando Modulo A
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo)

//#Chamando Modulo B
console.log(moduloB.boaNoite())
console.log(moduloB.bomDia)