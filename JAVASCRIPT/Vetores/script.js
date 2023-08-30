
var num = document.getElementById('numero')
let selnum = document.getElementById('selnum')
let vetor = []
var fim = document.getElementById('fim')
selnum.innerHTML = ''
vetor.push(numero)
function adicionar(){
    var numero = Number(num.value)
    var item = document.createElement('option')
        item.text = ` ${numero} foi adicionado`
        selnum.appendChild(item)
        vetor.push(numero)    
}
function finalizar(){
    var maior = 0
    var menor = 100
    for(var x = 0;x < vetor.length; x++){
        if(vetor[x] > maior){
            maior = vetor[x]
        }
        else if(vetor[x] < menor){
            menor = vetor[x]
        }

    }
    fim.innerText += `o maior numero foi ${maior} e o menor numero foi ${menor} ` 
   
}





// let num = [2,4,9,5,7]
// num.sort()

// var a = num.indexOf(4)
// console.log(a)