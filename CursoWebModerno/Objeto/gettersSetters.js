const sequenciaIDade = {
    _valor: 1,
    get valor(){ return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequenciaIDade.valor, sequenciaIDade.valor)
sequenciaIDade.valor = 1000
console.log(sequenciaIDade.valor, sequenciaIDade.valor)
sequenciaIDade.valor = 900
console.log(sequenciaIDade.valor, sequenciaIDade.valor)