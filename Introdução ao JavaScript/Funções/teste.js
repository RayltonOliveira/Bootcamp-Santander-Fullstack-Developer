let numero = [];
let N = 20;

for (let i = 0; i < N.length; i++) {
  if (i % 2 === 0) {
    numero.push(i ** 2);
  }

  return numero;
}
console.log(numero);
