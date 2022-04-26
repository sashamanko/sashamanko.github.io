// Pars counter
// __________________________________________________
export const parsCounter = async () => {
  const coutersBlock = document.querySelector('.js--couters-block');
  const all = document.querySelector('.js--counter-all');
  const nb = document.querySelector('.js--counter-nb');
  const pb = document.querySelector('.js--counter-pb');

  // await axios('http://localhost/api/')
  await axios('https://privat24-api.herokuapp.com/api/')
    .then(data => {
      all.textContent = data.data.allGetCounter;
      nb.textContent = data.data.nationalBankGetCounter;
      pb.textContent = data.data.privatBankGetCounter;

      coutersBlock.dataset.visibility = true;
    })
    .catch(error => {})
};