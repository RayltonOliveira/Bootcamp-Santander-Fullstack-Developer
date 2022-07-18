var contador = document.getElementById("contador");
var positivoNumero = 0;

function incremento() {
  if (positivoNumero < 10) {
    positivoNumero = positivoNumero + 1;
    contador.innerHTML = positivoNumero;
  }
  if (positivoNumero >= 0) {
    contador.style.color = "black";
  }
}
function decremento() {
  if (positivoNumero > -10) {
    positivoNumero = positivoNumero - 1;
    contador.innerHTML = positivoNumero;
    if (positivoNumero < 0) {
      contador.style.color = "red";
    }
  }
}
