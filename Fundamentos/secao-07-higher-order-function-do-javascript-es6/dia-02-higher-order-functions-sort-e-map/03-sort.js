const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 30 },
  { name: 'Zeros', value: 37 }
];

// Ordene os elementos do array de forma alfabética CRESCENTE, pelo nome
function comparar(a, b) {
  if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
  // a deve ser igual a b
      return 0;
}

items.sort(comparar);

console.log(items);

// Ordene os elementos do array de forma alfabética DECRESCENTE, pelo nome
// function comparar(b, a) {
//   if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//   // a deve ser igual a b
//       return 0;
// }

// items.sort(comparar);

// console.log(items);