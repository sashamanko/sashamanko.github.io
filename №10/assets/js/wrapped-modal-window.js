document.addEventListener('DOMContentLoaded', () => {
  const wrappedModalWindow = document.querySelectorAll('[data-wrapped-modal]');

  wrappedModalWindow.forEach(elem => {
    const modalWindow = document.querySelector(elem.getAttribute('data-wrapped-modal'))
    const modalWindowContent = document.createElement('div');
    const modalWindowClosaBtn = document.createElement('button');
    const modalWindowChildren = modalWindow.innerHTML;
    
    if (modalWindow.querySelector('title')) {
      modalWindowContent.style.cssText = 'padding-top: 40px;'
    }

    modalWindowContent.classList.add('content');
    modalWindowContent.innerHTML = modalWindowChildren;
    modalWindowContent.append(modalWindowClosaBtn)

    modalWindowClosaBtn.classList.add('close-btn');
    modalWindowClosaBtn.addEventListener('click', () => {
      modalWindowContent.parentNode.classList.remove('active');
    })

    modalWindow.innerHTML = '';
    modalWindow.append(modalWindowContent);

    elem.addEventListener('click', () => {
      modalWindow.classList.add('active');
    })
  })
})