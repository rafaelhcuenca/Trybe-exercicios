const fruits = ['cherries', 'apples', 'orange', 'bananas'];

// Ordene os elementos do array de forma alfabética CRESCENTE
// fruits.sort();

// console.log(fruits);

// Ordene os elementos do array de forma alfabética DECRESCENTE

function comparar(b, a) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a deve ser igual a b
  return 0;
}

fruits.sort(comparar)

console.log(fruits);