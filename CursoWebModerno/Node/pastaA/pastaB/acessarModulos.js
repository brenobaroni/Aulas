const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const saudacao = require('saudacao') //Acessa Direto o node modules.

console.log(saudacao.ola)


const c = require('./pastaC/index')
//console.log(c.ola2)
console.log(c.ola3)

c.falarfiote()

//Modulo Core
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8083)

