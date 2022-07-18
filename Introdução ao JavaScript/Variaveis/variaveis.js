// Var Escopo global e local  e aceita o hoisting
teste1 = 1;
console.log(teste1);
// hoisting leva a variavel teste1 para cima e atribui o valor 1
var teste1;

// Const = não pode ter o seu valor redeclarado ou reatribuido. Seu escopo é de bloco.
const valorFixo = 7;
console.log(valorFixo);

// let = pode ter seu valor reatribuido. Seu escopo é de blobo.
let valor = 5;
valor = 4;
console.log(valor);
