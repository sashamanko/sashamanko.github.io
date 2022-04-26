import { banks } from './components/bank.js';
import { garbage } from './components/garbage.js';
import { parsCounter } from './components/parsCounter.js';
import theme from './components/theme.js';

document.addEventListener('DOMContentLoaded', () => {
  theme();
  banks()
  parsCounter();
  garbage();
})