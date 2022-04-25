// Bank
// __________________________________________________
const code = document.querySelector('code');
const bank = document.querySelector('.js--bank');
const date = document.querySelector('.js--date');
const nowDate = moment().locale('uk').format('L');

const JSON = {
    all: `{ 
  <span class='propertie-name'>"date"</span>: "${nowDate}",
  <span class='propertie-name'>"baseCurrency"</span>: "UAH",
  <span class='propertie-name'>"exchangeRate"</span>: [
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "USD",
      <span class='propertie-name'>"saleRateNB"</span>: <span class="value-number">29.2549</span>,
      <span class='propertie-name'>"purchaseRateNB"</span>: <span class="value-number">29.2549</span>,
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">29.5474</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">29.2549</span>
    },
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "EUR",
      <span class='propertie-name'>"saleRateNB"</span>: <span class="value-number">33.1707</span>,
      <span class='propertie-name'>"purchaseRateNB"</span>: <span class="value-number">33.1707</span>,
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">32.88</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">32.88</span>
    },
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "PLN",
      <span class='propertie-name'>"saleRateNB"</span>: <span class="value-number">7.296</span>,
      <span class='propertie-name'>"purchaseRateNB"</span>: <span class="value-number">7.296</span>,
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">7.15</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">6.85</span>
    },
  ]
}`,
nb: `{ 
  <span class='propertie-name'>"date"</span>: "${nowDate}",
  <span class='propertie-name'>"bank"</span>: "NB",
  <span class='propertie-name'>"baseCurrency"</span>: "UAH",
  <span class='propertie-name'>"exchangeRate"</span>: [
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "USD",
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">29.2549</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">29.2549</span>,
    },
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "EUR",
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">33.1707</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">33.1707</span>,
    },
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "PLN",
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">7.296</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">7.296</span>,
    },
  ]
}`,
pb: `{ 
  <span class='propertie-name'>"date"</span>: "${nowDate}",
  <span class='propertie-name'>"bank"</span>: "PB",
  <span class='propertie-name'>"baseCurrency"</span>: "UAH",
  <span class='propertie-name'>"exchangeRate"</span>: [
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "USD",
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">29.5474</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">29.2549</span>
    },
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "EUR",
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">32.88</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">32.88</span>
    },
    {
      <span class='propertie-name'>"baseCurrency"</span>: "UAH",
      <span class='propertie-name'>"currency"</span>: "PLN",
      <span class='propertie-name'>"saleRate"</span>: <span class="value-number">7.15</span>,
      <span class='propertie-name'>"purchaseRate"</span>: <span class="value-number">6.85</span>
    },
  ]
}`
  }

export const banks = () => {
  date.textContent = nowDate;

  document.querySelectorAll('.js--bank-radio').forEach(elem => {
    setData(elem);

    elem.addEventListener('click', e => {
      setData(elem);
    })
  })
}

function setData(elem) {
  if (elem.value === 'all' && elem.checked) {code.innerHTML = JSON.all; bank.textContent = '';}
  else if (elem.value === 'NB' && elem.checked) {code.innerHTML = JSON.nb; JSON.all; bank.textContent = 'bank=NB&';}
  else if (elem.value === 'PB' && elem.checked) {code.innerHTML = JSON.pb; bank.textContent = 'bank=PB&';}
}