


function gerarTabuada(){
    var numero = document.querySelector('input[id="txtN"]');
    var lista = document.querySelector('select[id="seltab"]');
    if(numero.value > 0 ){
        lista.style.visibility = "visible";
        var c = 1;
        var numero = Number(numero.value)
        lista.options.length = 0;
        while (c <= 10) {
            lista.appendChild( new Option(`${numero} x ${c} = ${numero * c}`))
            c++
        }
        lista.setAttribute("size", "10")
    }else{
        lista.style.visibility = "hidden";
        alert("O número digitado deve ser maior que 0!")
        return false
    }
    
    
    
}

function loader(){
    alert()
    
    var lista = document.querySelector('select[id="seltab"');
    lista.style.visibility = "hidden";
}
var domReady = function(ready){
    if (document.readyState != 'loading') return ready();
    
    window.document.addEventListener('DOMContentLoaded', ready);
    function _ready(){
        window.document.removeEventListener('DOMContentLoaded', ready);
        ready();
    }
    
}

domReady(function(){
    loader()
});