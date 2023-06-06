// 1. Transforme (Mapeie) o array de objetos cities em um array de strings com o seguinte formato:
// "${nomeDaCidade} - ${siglaDoEstado}"

const cities = [
  { state: "AM", name: "Manaus" , region: "N" },
  { state: "PA", name: "Belém" , region: "N" },
  { state: "TO", name: "Porto Nacional" , region: "N" },
  { state: "MG", name: "Lavras" , region: "SE" },
  { state: "BA", name: "Feira de Santana" , region: "NE" },
  { state: "PR", name: "Cascavel" , region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// RESOLVENDO COM FOR
// const citiesAndStates = (array) => {
//   const myArray = [];

//   for (let index = 0; index < array.length; index += 1) {
//     myArray.push(`${array[index].name} - ${array[index].state}`);
//   }
//   return myArray;
// }

// RESOLVENDO COM MAP
// const citiesAndStates = (cities) => {

//   return cities.map((city) => {
//     return `${city.name} - ${city.state}`;
//   })
// }

// Refatorando
const citiesAndStates = (cities) => cities.map((city) => `${city.name} - ${city.state}`);

// CHAMANDO A FUNÇÃO
console.log(citiesAndStates(cities));
// console.table(citiesAndStates(cities));