// For
function multiplicaPorDois(arr) {
  let multiplicados = [];

  for (let i = 0; i < arr.length; i++) {
    multiplicados.push(arr[i] * 2);
  }
  return multiplicados;
}
const meusNumeros = [2, 33, 456, 356, 40]; // [4, 66, 912, 712, 80]

console.log(multiplicaPorDois(meusNumeros));

// For in

function forInExemplo(obj) {
  for (prop in obj) {
    console.log(prop); // verifica oq está sendo chamado vai aparecer(nome, idade, cidade)
  }
}
const meuObjeto = {
  nome: "João",
  idade: "20",
  cidade: "Salvador",
};
forInExemplo(meuObjeto);

// for in
function exemploDois() {
  function forInExemplo(obj) {
    for (prop in obj) {
      console.log(obj[prop]); // verifica oq está sendo chamado vai aparecer(João, 20, Salvador)
    }
  }
  const meuObjeto2 = {
    nome: "João",
    idade: "20",
    cidade: "Salvador",
  };
  forInExemplo(meuObjeto2);
}
console.log(exemploDois());
