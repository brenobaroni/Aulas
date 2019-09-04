const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //Middleware de arquivos
app.use(bodyParser.urlencoded({ extended: true})) //Middleware de formulários econded
app.use(bodyParser.json()) //Middleware por Json

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './upload')
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if( err ) {
            return res.end('Ocorreu um Erro.')
        }
        
        res.end('Concluída com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})


app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query ?
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
}) 


//app.get('/teste', (req, res) => res.send(new Date))
app.listen(8080, () => console.log('Executando Servidor na porta 8080...'))