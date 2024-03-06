const form = document.querySelector('#converter-form');
const amount = document.querySelector('#amount');
const fromCurrency = document.querySelector('#from-currency');
const toCurrency = document.querySelector('#to-currency');
const result = document.querySelector('#result');

const convertCurrency = async (e) => {
  e.preventDefault();
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`);
  const { rates } = await response.json();
  const conversionRate = rates[toCurrency.value];
  const convertedAmount = (amount.value * conversionRate).toFixed(2);
  result.textContent = `Result: ${convertedAmount} ${toCurrency.value}`;
}

form.addEventListener('submit', convertCurrency);

const swapCurrencies = () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
}

const swapButton = document.querySelector('#swap-currencies');
swapButton.addEventListener('click', swapCurrencies);