// Aprendendo sobre if e else
function numeroPositivo(num) {
  let resultado;
  if (num < 0) {
    resultado = false;
  } else {
    resultado = true;
  }
  return resultado;
}
// Melhorando o código
function numeroPositivo(num) {
  let resultado;
  const ehNegativo = num < 0;
  if (ehNegativo) {
  } else {
    return false;
  }
  return resultado;
}

// Melhorando mais o código

function numeroPositivo(num) {
  const ehNegativo = num < 0;
  if (ehNegativo) {
    return false;
  }
  return true;
}

function numeroPositivo(num) {
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if (ehNegativo) {
    return "Esse número é negativo";
  } else if (!ehNegativo && maiorQueDez) {
    return "Esse número é positivo e maior que dez";
  }
  return "Esse número é positivo";
}
