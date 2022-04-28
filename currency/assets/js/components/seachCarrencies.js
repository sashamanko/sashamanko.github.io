// Imports
// __________________________________________________
import { ajax } from "./ajax.js";
import { searchCurrenciesItem } from "./elements.js";

// Variables
// __________________________________________________
// Elements
const currenciesList = document.querySelector('.js--currencies-search-list');

// API
const apiLink = 'https://privat24-api.herokuapp.com/';
const apiParams = {
  // date: '27.04.2022',
  date: moment().locale('uk').format('L'),
  bank: '',
  searchStr: '',
};


// Seach carrencies
// __________________________________________________
export const seachCarrencies = () => {
  // Variables
  // __________________________________________________

  // Elements
  const inputText = document.querySelector('.js--input');
  const select = document.querySelector('.js--select');
  const inputDate = document.querySelector('.js--date');

  // Set values
  // __________________________________________________
  inputDate.value = apiParams.date.split('.').reverse().join('-');
  inputDate.max = apiParams.date.split('.').reverse().join('-');

  // Event listeners
  // __________________________________________________
  inputText.oninput = e => {
    e.target.value.trim().length > 0
      ? apiParams.searchStr = e.target.value
      : delete apiParams.searchStr;

    render()
  };

  select.onchange = () => {
    if (select.value === 'all') apiParams.bank = '';
    else if (select.value === 'NB') apiParams.bank = 'NB';
    else if (select.value === 'PB') apiParams.bank = 'PB';

    render()
  };

  inputDate.onchange = e => {
    apiParams.date = e.target.value.split('-').reverse().join('.');
    
    render();
  };
};


// Render
// __________________________________________________
export function render() {
  const params = apiParams;

  if (params.bank === '') delete params.bank;
  else if (params.searchStr === '') delete params.searchStr;

  ajax(apiLink, params ).then(data => {
    
    let arr = data.exchangeRate;

    currenciesList.innerHTML = '';
  
    if (params.searchStr !== undefined) arr = filterCurrency(arr, params.searchStr);

    arr.forEach(elem => {
        
      if (elem.baseCurrency !== elem.currency) {
          elem.saleRate !== undefined
            ? currenciesList.append(searchCurrenciesItem(elem, ['saleRate', "purchaseRate"]))
            : currenciesList.append(searchCurrenciesItem(elem, ['saleRateNB', "purchaseRateNB"]));
        };
      });
      
  });
};

// Filter currency
// __________________________________________________
function filterCurrency(arr, searchStr) {

  const filteredArr = arr.filter((item) => {
    if(item.currency !== undefined && searchStr !== false) {
      return searchCurrency(item.currency, searchStr);
    };
  });
  
  return filteredArr;
};

// Search currency
// __________________________________________________
function searchCurrency (str, subStr) {
  return str.toUpperCase().includes(subStr.toUpperCase());
};