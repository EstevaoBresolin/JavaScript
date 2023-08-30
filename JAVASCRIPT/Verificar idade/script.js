function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var msg = document.querySelector('div#msg')
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero =''
    var img = document.getElementById('imagem')
        if(fsex[0].checked)
        {
            genero = 'Homem'
            document.body.style.background = 'rgb(87, 87, 223)'
            if(idade > 0 && idade < 14)
            {               
                img.src = 'img/menino.jpg'
            }
            else if(idade > 15 && idade < 55)
            {
                img.src = 'img/homem.jpg'
            }
            else
            {
                img.src = 'img/idoso.jpg'
            }
        } 

        else if(fsex[1].checked)
        {
            genero = 'Mulher'
            document.body.style.background = 'rgb(228, 93, 217)'
            if(idade > 0 && idade < 14)
            {               
                img.src = 'img/menina.jpg'
            }
            else if(idade > 15 && idade < 55)
            {
                img.src = 'img/mulher.jpg'
            }
            else
            {
                img.src = 'img/idosa.jpg'
            }
        }

        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`
   
    

}