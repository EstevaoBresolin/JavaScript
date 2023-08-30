function contar()
{
    var ini = document.getElementById('inicio')
    var inicio = Number(ini.value)
    var fi = document.getElementById('fim')
    var fim = Number(fi.value)
    var pas = document.getElementById('passo')
    var passo = Number(pas.value)
    var msg = document.getElementById('msg')
    msg.innerHTML = ''
    for(var x = inicio; x <= fim; x += passo)
    {
        msg.innerText += ` ${x} \u{1F603}`
    }

}