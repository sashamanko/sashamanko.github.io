// Imports
// __________________________________________________
import ajax from "./ajax.js";
import newElements from "./domBuiler.js";
import { popularCurrenciesItem, searchCurrenciesItem } from "./elements.js";


// Seach carrencies
// __________________________________________________
const seachCarrencies = () => {
  // Variables
  const p24apiData = ajax(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=12`);
  const input = document.querySelector('.js--input');

  input.addEventListener('input', e => {
    document.querySelector('.js--currencies-search-list').innerHTML = ''
    
    const inputValue = e.target.value.trim()
    
    if (inputValue.length !== 0) {
  
      p24apiData.then(item => {
        const arr = filterCurrency(item, inputValue);
        console.log(arr);
        arr.forEach(elem => {
          searchCurrenciesItem(elem)
        });
      });
  
    } else {
      document.querySelector('.js--currencies-search-lsit').innerHTML = '';
  }
  });
}

function searchCurrency (str, subStr) {
  return str.toUpperCase().includes(subStr.toUpperCase())
}

function filterCurrency(arr, searchStr) {
  const filteredArr = arr.filter((item) => {
    const ccy = item.ccy;
    return searchCurrency(ccy, searchStr)
  })

  return filteredArr;
}

export default seachCarrencies;