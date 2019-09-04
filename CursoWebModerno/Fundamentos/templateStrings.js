const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome +'!'

console.log(nome)
console.log(concatenacao)

const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

//expressoes...
console.log(`1+1 = ${1+1}`)

const up = s => s.toUpperCase()

console.log(`Ei... ${up('cuidado')}`)