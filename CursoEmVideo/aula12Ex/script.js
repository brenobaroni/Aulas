function loader(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var horaDodia = window.document.getElementById('horaDoDia')

    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutosAtual = (dataAtual.getMinutes() < 10 ? '0' : '') + dataAtual.getMinutes();
    var timer = `${horaAtual}:${minutosAtual}`

    if( horaAtual >= 0 && horaAtual < 12 ){
        //manha
        msg.innerHTML = `Bom dia! </br>Agora são <b>${timer}</b> horas.`
        img.src = '/imgs/manhaCircle.png'
        window.document.body.style.background = '#ffedbc'
    }else if(horaAtual >= 12 && horaAtual <= 17){
        //tarde
        msg.innerHTML = `Boa Tarde! </br> Agora são <b>${timer}</b> horas.`
        img.src = 'imgs/tardeCircle.png'
        window.document.body.style.background = '#ff5b00'
    }else{
        //noite
        msg.innerHTML = `Boa Noite! </br>Agora são <b>${timer}</b> horas.`
        img.src = 'imgs/noiteCircle.png'
        window.document.body.style.background = '#042c5e'

    }

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
