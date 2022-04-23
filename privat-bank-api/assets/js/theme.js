// Imports
// __________________________________________________

// Them
// __________________________________________________
const theme = () => {
  const themBtn = document.querySelector('.js--them-btn');
  const htmlDataset = document.documentElement.dataset;

  if (htmlDataset.theme == 'dark') {
    themBtn.classList.toggle('ri-moon-line');
    themBtn.classList.toggle('ri-sun-line');
  }

  themBtn.addEventListener('click', e => {
    if (htmlDataset.theme === 'white') {
      htmlDataset.theme = 'dark';
      themBtn.classList.toggle('ri-sun-line');
      themBtn.classList.toggle('ri-moon-line');

      WrappedLocalStorage.set('wrapped-theme', 'dark')
    } else {
      htmlDataset.theme = 'white';
      themBtn.classList.toggle('ri-moon-line');
      themBtn.classList.toggle('ri-sun-line');
      
      WrappedLocalStorage.set('wrapped-theme', 'white')
    }

  });
};

export default theme;