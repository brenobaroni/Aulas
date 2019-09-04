function contar(){
    var txt1 = document.querySelector('input[id="txt1"')
    var txt2 = document.querySelector('input[id="txt2"')
    var txtPasso = document.querySelector('input[id="txtPasso"')
    var res = document.querySelector('div[id="res"')
    
    
    
    if(txt1.value.length == 0 || txt2.value.length == 0 || txtPasso.value.length == 0){
        alert("Faltam Dados!")
        res.innerHTML = 'Contando: '
    }else{
        res.innerHTML = 'Contando: '
        let inicio = Number(txt1.value)
        let fim = Number(txt2.value)
        let passo = Number(txtPasso.value)
        
        if(inicio < fim){
            res.innerHTML = 'Contando: '
            for(let c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} \u{1F603} `
            }
        }else if(inicio > fim){
            res.innerHTML = 'Contando: '
            for( c= inicio; c >=fim;  c -= passo){
                res.innerHTML += `${c} \u{1F603}`
            }
        }else{
            res.innerHTML = 'Impossível Contar!'
            alert("Inicio e Fim não podem ser iguais!")
        }
        
        if(res.innerHTML != 'Impossível Contar!'){
            
        }
        
        
    }
}