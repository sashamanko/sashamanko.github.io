// Imports
// __________________________________________________
import them from "./components/them.js";
import seachCarrencies from "./components/seachCarrencies.js";
import { dateElement } from "./components/elements.js";

// DOM content loaded
// __________________________________________________
document.addEventListener('DOMContentLoaded', () => {

  // Variables
  // __________________________________________________

  // Functions 
  // __________________________________________________
  them()
  seachCarrencies()

  // Тимчасово
  document.querySelector('.footer__container').append(dateElement())
  
});