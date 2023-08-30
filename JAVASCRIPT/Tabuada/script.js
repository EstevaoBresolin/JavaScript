function tabuada()
{
    var num = document.getElementById('numero')
    var numero = Number(num.value)
    var tab = document.getElementById('seltab')
    tab.innerHTML = ''
    for(var x = 1; x <= 10; x++)
    {
        var item = document.createElement('option')
        item.text = ` ${numero} X ${x} = ${numero*x}`
        tab.appendChild(item)
    }
    
}