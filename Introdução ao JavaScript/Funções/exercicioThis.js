/*
    Atividade 2: This
1 - Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/
function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "Amelia",
  idade: 26,
};

const pessoa2 = {
  nome: "Cláudia",
  idade: 20,
};

const pessoa3 = {
  nome: "Ricardo",
  idade: 50,
};
const animal = {
  nome: "Lola",
  idade: 4,
};
console.log(calculaIdade.call(pessoa3, 25));
console.log(calculaIdade.call(animal, 16));
console.log(calculaIdade.apply(pessoa2, [24]));
console.log(calculaIdade.apply(pessoa1, [24]));
