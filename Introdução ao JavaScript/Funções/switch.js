// Switch / Case
function getAnimal(id) {
  switch (id) {
    case 1:
      return "Cão";
    case 2:
      return "Gato";
    case 3:
      return "Pássaro";
    default:
      return "Peixe";
  }
}

// getAnimal(4);
// getAnimal(1);
// getAnimal("1");
console.log(getAnimal(4, 1, "1"));
