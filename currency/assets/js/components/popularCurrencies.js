// Imports
// __________________________________________________

import ajax from "./ajax.js";
import { popularCurrenciesItem } from "./elements.js";

// Popular currencies
// __________________________________________________

const popularCurrencies = () => {
  const p24apiData = ajax(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`);

  p24apiData.then(item => {
    item.forEach(elem => {
      popularCurrenciesItem(elem)
    });
  })
}

export default popularCurrencies;