const input = document.querySelector('.input-block__input'),
    input_btn = document.querySelector('.input-block__btn'),
    propsItem = document.querySelectorAll('.props-list__item'),
    propsMenu = document.querySelector('.props-menu');

input.addEventListener('input', () => {
    if (input.value.length !== 0) {
        input_btn.classList.add('d-flex');
    } else {
        input_btn.classList.remove('d-flex');
    }
})

propsItem.forEach(elem => {
    elem.addEventListener('click', (e) => {
        propsMenu.classList.add('active');
    })
})