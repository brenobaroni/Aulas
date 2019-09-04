const scheduele = require('node-schedule')

const tarefa1 = scheduele.scheduleJob('*/5 * 23 * * 0', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')

}, 20000)

const regra = new scheduele.RecurrenceRule()

regra.dayOfWeek = [new scheduele.Range(0,6)]
regra.hour = 23
regra.second = 30

const tarefa2 = scheduele.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})
