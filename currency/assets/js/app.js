// Imports
// __________________________________________________
import { theme } from "./components/theme.js";
import { render, seachCarrencies } from "./components/seachCarrencies.js";
import { dateElement } from "./components/elements.js";

// DOM content loaded
// __________________________________________________
document.addEventListener('DOMContentLoaded', () => {

  // Variables
  // __________________________________________________

  // Functions 
  // __________________________________________________
  theme()
  render()
  seachCarrencies()

  // Тимчасово
  document.querySelector('.footer__container').append(dateElement)
  
});