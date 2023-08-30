function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText =  `Agora São ${hora} horas.`
    if(hora >= 5 && hora < 12)
    {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#6A2F1B'
    }
    else if (hora > 12 && hora < 18)
    {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#F9AC35'
    }
    else 
    {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#574166'
    }

}