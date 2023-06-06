// 2. Transforme (Mapeie) o array de objeto cities em um array de objetos do seguinte formado:
// {
//   state: "Amazonas",
//   city: "Manaus",
//   region: "Norte"
// }

const states = [
  { short: "PA", name: "Pará" },
  { short: "TO", name: "Tocantins" },
  { short: "MG", name: "Minas Gerais" },
  { short: "AM", name: "Amazonas" },
  { short: "BA", name: "Bahia" },
  { short: "PR", name: "Paraná" },
  { short: "SP", name: "São Paulo" },
  { short: "RN", name: "Rio Grande do Norte" },
  { short: "CE", name: "Ceará" }
];

const regions = [
  { short: "N", name: "Norte" },
  { short: "NE", name: "Nordeste" },
  { short: "CW", name: "Centroeste" },
  { short: "SE", name: "Sudeste" },
  { short: "S", name: "Sul" },
];

const cities = [
  { state: "AM", name: "Manaus", region: "N" },
  { state: "PA", name: "Belém", region: "N" },
  { state: "TO", name: "Porto Nacional", region: "N" },
  { state: "MG", name: "Lavras", region: "SE" },
  { state: "BA", name: "Feira de Santana", region: "NE" },
  { state: "PR", name: "Cascavel", region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// RESOLVENDO COM MAP
const arrayCities = (cities) => {
  return cities.map((city) => { // { state: "AM", name: "Manaus", region: "N" } ---> na 1a iteração
    const findState = states.find((state) => (state.short === city.state));
    const findRegion = regions.find((region) => region.short === city.region);

    return {
        state: findState.name,
        city: city.name,
        region: findRegion.name
      }
  })
}

// const findState = states.find((state) => {
//   return state.short === 'AM';
// })

// const findRegion = regions.find((region) => {
//   return region.short === 'N';
// })

// CHAMANDO A FUNÇÃO
// console.log(arrayCities(cities));
// console.log(findState);
// console.log(findRegion);




// BÔNUS
// APLICANDO HOFS NO RETORNO DA FUNÇÃO arrayCities;
function comparar(a, b) {
  if (a.state < b.state) return -1;
    if (a.state > b.state) return 1;
      return 0;
}


//FIND()
const findState = arrayCities(cities).find((city) => city.state === 'Paraná');
//SOME()
const someState = arrayCities(cities).some((city) => city.state === 'Bahia');
//EVERY()
const everyState = arrayCities(cities).every((city) => city.state === 'Bahia');
//SORT()
const sortByState = arrayCities(cities).sort(comparar);
//FOREACH()
const funtionForEach = () => {
  const array = arrayCities(cities);
  array.forEach((city) => city['terra'] = 'Boa!!!');

  return array;
}



console.log(findState);
console.log(someState);
console.log(everyState);
console.log(sortByState);
console.log(funtionForEach());