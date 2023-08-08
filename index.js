var setaDireita = window.document.getElementById("setaDireita")
var setaEsquerda = window.document.getElementById("setaEsquerda")
var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")

function RolarParaDireita() {
    Leonardo.style="display:none"
    Samanta.style="display:flex"
    setaDireita.style="display:none"
    setaEsquerda.style="display:flex; margin-top:55%"
}

function RolarParaEsquerda(){
    Leonardo.style="display:flex"
    Samanta.style="display:none"
    setaDireita.style="display:flex; margin-top:55%"
    setaEsquerda.style="display:none"
}