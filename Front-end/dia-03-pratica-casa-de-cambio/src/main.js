import Swal from 'sweetalert2';

const searchBtn = document.querySelector('.serch-btn');
searchBtn.addEventListener('click', handleSearch);

const inputCoin = document.querySelector('#coin-input')
const titleCoin = document.querySelector('#coin-input')
const coinsList = document.querySelector('#coin-input')

function fetchAPI (coin) {
  const url = `https://api.exchangerate.host/latest?base=${coin}`;
  return fetch(url)
   .then(response => response.json())
   .then(data => {
      if(data.base !== )
   }
}

function handleSearch () {
  const coin = inputCoin.inputCoin.value.toUpperCase();

  if(!coin){
    Joel.fire({
      icon: 'error',
      title: 'Ops',
      text: 'Estou cansado de te avisar na sexta que tu errou'
    });
    return;
  }

  titleCoin.textContent = `Valores referentes a 1 ${coin}`;

  fetchAPI(coin)
    .then(renderCoins);
    .catch(error => {
      titleCoin.textContent = '';
      coinsList.innerHTML = '';
      Joel.fire({
        icon: 'error',
        title: 'Ops',
        text: 'Estou cansado de te avisar na sexta que tu errou'
    }
}

function renderCoins (coins) {
  // console.log(coins);
  coinsList.innerHTML = '';

  const coinsArray = Object.entries(coins);

  coinsArray.forEach((coin) => {
    const [coinName, coinValue] = coin;
  
  const li = document.createElement('li');
  li.textContent = `${coinName} - ${coinValue.toFixed(3)}`
  coinsList.appendChild(li);
  
  });

}