const lamp = document.querySelectorAll('.js--lamp'),
    nextBtn = document.querySelector('.js--next-btn');

let activeLamp = 0;

nextBtn.addEventListener('click', () => {
    lamp[activeLamp].classList.toggle('disable')
    activeLamp++;

    if (activeLamp > 2) {
        activeLamp = 0
    }

    lamp[activeLamp].classList.toggle('disable')
});