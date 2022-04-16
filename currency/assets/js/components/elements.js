// Imports
// __________________________________________________
import newElements from "./domBuiler.js";

// Elements
// __________________________________________________

// Date itement
export const dateElement = () => {
  return newElements({
      tag: 'time',
      textContent: moment().locale('uk').format('l'),
      classList: {
        0: 'moment__date',
      },
    })
  }

// Popular currencies item
export const popularCurrenciesItem = (item) => {

  const title = newElements({
    tag: 'h4',
    textContent: item.ccy,
    classList: {
      0: 'popular-currencies__item__title',
    },
  })

  const buy = newElements({
    tag: 'p',
    textContent: parseFloat(item.buy).toFixed(2),
    classList: {
      0: 'popular-currencies__item__buy',
    }
  })

  const sale = newElements({
    tag: 'p',
    textContent: parseFloat(item.sale).toFixed(2),
    classList: {
      0: 'popular-currencies__item__sale',
    }
  })

  const currencyBlock = newElements({
    tag: 'div',
    classList: {
      0: 'popular-currencies__item__currency-block',
    },
    childNodes: {
      0: buy,
      1: sale,
    }
  })

  return newElements({
    tag: 'li',
    classList: {
      0: 'popular-currencies__item',
      1: 'd-flex'
    },
    parentNode: '.js--popular-currencies-list',
    childNodes: {
      0: title,
      1: currencyBlock,
    }
  })

}

// Search currencies item
export const searchCurrenciesItem = (item) => {

  const spanSale = newElements({
    tag: 'span',
    textContent: parseFloat(item.sale).toFixed(2),
    classList: {
      0: 'currencies__search__item__currensy-text__sale',
    }
  })

  const spanBuy = newElements({
    tag: 'span',
    textContent: parseFloat(item.buy).toFixed(2),
    classList: {
      0: 'currencies__search__item__currensy-text__buy',
    }
  })

  const spanBaseCcy = newElements({
    tag: 'span',
    textContent: item.base_ccy,
    classList: {
      0: 'currencies__search__item__currensy-title__base-ccy',
    }
  })

  const arrows = newElements({
    tag: 'i',
    classList: {
      0: 'currencies__search__item__currensy-title__arrows',
      1: 'ri-arrow-left-right-line',
    }
  })

  const spanCcy = newElements({
    tag: 'span',
    textContent: item.ccy
  })

  const currenciesTitle = newElements({
    tag: 'h4',
    classList: {
      0: 'currencies__search__item__currensy-title',
      1: 'd-flex'
    },
    childNodes: {
      0: spanCcy,
      1: arrows,
      2: spanBaseCcy,
    }
  })
  
  newElements({
    tag: 'li',
    classList: {
      0: 'currencies__search__item',
      1: 'd-flex',
    },
    parentNode: '.js--currencies-search-list',
    childNodes: {
      0: currenciesTitle,
      1: spanBuy,
      2: spanSale,
    }
  });
}