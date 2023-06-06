// Transforme o array birds em outro array que contenha SOMENTE os nomes dos pássaros, porém com letras maiúsculas.

const birds = [
  { id: 'DV8', name: 'Eurasian Collared-Dove', type: 'Dove' },
  { id: 'HK12', name: 'Bald Eagle', type: 'Hawk' },
  { id: 'HK6', name: 'Red-Tailed Hawk', type: 'Hawk' },
  { id: 'SP11', name: 'Old World Sparrow', type: 'Sparrow' },
  { id: 'DV2', name: 'Mourning Dove', type: 'Dove' },
];

// RESOLVENDO COM FOR
// const birdsName = (array) => {
//   const myArray = [];

//   for (let index = 0; index < array.length; index += 1) {
//     const UpperCaseName = array[index].name.toUpperCase();
//     myArray.push(UpperCaseName);
//   }
//   return myArray;
// }

// RESOLVENDO COM MAP

const birdsName = (birds) => {
  return birds.map((bird) => {
    return `${bird.name}`.toUpperCase();
  });
};

// CHAMANDO A FUNÇÃO
console.log(birdsName(birds));