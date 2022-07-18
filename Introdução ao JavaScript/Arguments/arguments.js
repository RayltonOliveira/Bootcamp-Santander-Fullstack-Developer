// Arguments É uma coleção com todos os parâmetros passados quando a função foi invocada

function findMax() {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments;
    }
  }
  return max;
}

console.log(findMax(1, 2, 3, 6, 90, 1));
