const input = document.querySelector('.input-block__input'),
    input_btn = document.querySelector('.input-block__btn');

input.addEventListener('input', () => {
    if (input.value.length !== 0) {
        input_btn.classList.toggle('d-flex');
    }

})