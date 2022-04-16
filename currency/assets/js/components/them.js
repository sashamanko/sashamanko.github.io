// Imports
// __________________________________________________
import localStor from "./localstorage.js";

// Them
// __________________________________________________
const them = () => {
  const themBtn = document.querySelector('.js--them-btn');
  const htmlDataset = document.documentElement.dataset;

  if (localStor({method: 'get', key: "sashamanko-them"}) === 'white') {
    htmlDataset.them = 'white';
  } else {
    htmlDataset.them = 'dark';
    themBtn.classList.toggle('ri-moon-line');
    themBtn.classList.toggle('ri-sun-line');
  }

  themBtn.addEventListener('click', e => {
    if (htmlDataset.them === 'white') {
      htmlDataset.them = 'dark';
      themBtn.classList.toggle('ri-sun-line');
      themBtn.classList.toggle('ri-moon-line');

      localStor({
        method: 'set',
        key: 'sashamanko-them',
        value: 'dark'
      })
    } else {
      htmlDataset.them = 'white';
      themBtn.classList.toggle('ri-moon-line');
      themBtn.classList.toggle('ri-sun-line');
      
      localStor({
        method: 'set',
        key: 'sashamanko-them',
        value: 'white'
      })
    }

  });
};

export default them;