// Garbage
// __________________________________________________
export const garbage = () => {
  document.querySelector('.js--copy-btn').addEventListener('click', e => {
    navigator.clipboard.writeText(document.querySelector('.hero__bottom__link').textContent);
    
    if (e.target.classList.contains('ri-file-copy-line')) {
      e.target.classList.toggle('ri-file-copy-line');
      e.target.classList.toggle('ri-check-line');
    }
  });

}