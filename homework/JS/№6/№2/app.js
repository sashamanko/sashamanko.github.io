const modalOpenBtn = document.querySelector('.js--modal-btn-open'),
    modalWindow = document.querySelector('.js--modal-window'),
    modalCloseBtn = document.querySelector('.js--modal-btn-close');

modalOpenBtn.addEventListener('click', () => modalWindow.classList.add('active'));
modalCloseBtn.addEventListener('click', () => modalWindow.classList.remove('active'));