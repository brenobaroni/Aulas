function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0
    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual < velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro(180, 5)

const Ferrari = new Carro(350, 25)

uno.acelerar()
console.log(uno.getVelocidadeAtual())
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())


