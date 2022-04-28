// Imports
// __________________________________________________
import newElements from "./domBuiler.js";

// Elements
// __________________________________________________

// Date element
export const dateElement = newElements(`
  <time>${moment().locale('uk').format('L')}</time>
`)

// Search currencies item
export const searchCurrenciesItem2 = (item, arr) => {

  const li = document.createElement('ul');
  const currenciesTitle = document.createElement('h4');
  const spanBaseCcy = document.createElement('span');
  const arrows = document.createElement('i');
  const spanCcy = document.createElement('span');
  
  
  li.className = 'currencies__search__item d-flex';
  currenciesTitle.className = 'currencies__search__item__currensy-title d-flex'
  spanBaseCcy.className = 'currencies__search__item__currensy-title__base-ccy';
  arrows.className = 'currencies__search__item__currensy-title__arrows ri-arrow-left-right-line';

  spanCcy.textContent = item.currency;
  spanBaseCcy.textContent = item.baseCurrency;
  
  li.append(currenciesTitle)

  arr.forEach(el => {
    const span = document.createElement('span');

      span.textContent = parseFloat(item[el]).toFixed(2),
      span.className = `currencies__search__item__currensy-text__${el}`
     
      li.append(span);
  })
  
  currenciesTitle.append(spanCcy);
  currenciesTitle.append(arrows)
  currenciesTitle.append(spanBaseCcy);


  document.querySelector('.js--currencies-search-list').append(li)

}

export const searchCurrenciesItem = (item, arr) => {
  
  return newElements(`
  <li class="currencies__search__item d-flex">
    <h4 class="currencies__search__item__currensy-title d-flex">
      <span class="currencies__search__item__currensy-title__currensy">${item.currency}</span>

      <i class="currencies__search__item__currensy-title__arrows ri-arrow-left-right-line"></i>

      <span class="currencies__search__item__currensy-title__baseCurrency">${item.baseCurrency}</span>
    </h4>
      
    <span class="currencies__search__item__currensy-text__${arr[0]}">${item[arr[0]].toFixed(2)}</span>
    
    <span class="currencies__search__item__currensy-text__${arr[1]}">${item[arr[1]].toFixed(2)}</span>

  </li>
`)
};