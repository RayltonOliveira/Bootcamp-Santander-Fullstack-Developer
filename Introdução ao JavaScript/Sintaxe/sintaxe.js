// 1° Crie uma função que receba dois valores - ok
// 2° confira se os números são iguais
// 3° Confira se a soma dois números e maior que 10 ou menor que 20
// 4° Retorne uma string dizendo "Os numeros "num1" e "num2" não são iguais."
// 5° Retorne uma string dizendo "Sua soma é "soma"
// 6° Retorne uma string dizendo "que é maior/menor que 10 e maior/menor que 20. "

function recebeValores(num1, num2) {
  const PrimeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${PrimeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = "";

  if (num1 !== num2) {
    saoIguais = "Não";
  }
  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;
  let resultado10 = "";
  let resultado20 = "";

  compara10();
  compara20();
  function compara10() {
    if (soma < 10) {
      resultado10 = "menor que";
    } else if (soma === 10) {
      resultado10 = "Igual a ";
    } else {
      resultado10 = "maior que";
    }
  }
  function compara20() {
    if (soma < 20) {
      resultado20 = "menor que";
    } else if (soma === 20) {
      resultado20 = "Igual a ";
    } else {
      resultado20 = "maior que";
    }
  }

  return `Sua soma é ${soma}, que é ${resultado10} 10 e ${resultado20} 20. `;
}
console.log(recebeValores(5, 2));
