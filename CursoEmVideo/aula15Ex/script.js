function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('txtAno')
    var res = window.document.querySelector('div#res')

    if(formAno.value.length == 0 || formAno.value >= ano) {
        window.alert('[Erro] O ano digitado está incorreto!')
    }else{
        //window.alert('tudo ok!')
        var fsex = window.document.getElementsByName('radSex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if(fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         
    }

}