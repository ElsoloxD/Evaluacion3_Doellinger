//------------------------------------------Modulo de página viejo-----------------------------------------------------

//----------------------------------------------Evento Onclick-------------------------------------------------------------
function sumar() {
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value
let suma = parseInt(num1) + parseInt(num2)
let res3 = parseInt(num1) + parseInt(num2)
document.getElementById('res3').value = res3
}

function restar() {
    let num3 = document.getElementById("num3").value
    let num4 = document.getElementById("num4").value
    let resta = parseInt(num3) - parseInt(num4)
    let res2 = parseInt(num3) - parseInt(num4)
    document.getElementById('res2').value = res2
 }
function multiplicar() {
    let num5 = document.getElementById("num5").value
    let num6 = document.getElementById("num6").value
    let multi = parseInt(num5) * parseInt(num6)
    let res1 = parseInt(num5) * parseInt(num6)
    document.getElementById('res1').value = res1
    }
 function dividir() {
    let num7 = document.getElementById("num7").value
    let num8 = document.getElementById("num8").value
    let division = parseInt(num7) / parseInt(num8)
    let res = parseInt(num7) / parseInt(num8)
    document.getElementById('res').value = res
    
    }
