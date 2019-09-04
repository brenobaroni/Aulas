// Com Promisses
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        }) 
    })
}

// Recurso do ES8
// Objetivo de Simplificar o uso de promises...
let obterAlunos = async () => {    //Marcar com assyc 
    const ta = await getTurma('A') //senão nao sera 
    const tb = await getTurma('B') //poossivel usar await
    const tc = await getTurma('C')
    return[].concat(ta, tb, tc)
}//Retorna um objeto AssyncFunction

obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))