const scrollBar = document.querySelector('.js--scrollbar'),
    scrollBarPoint = document.querySelector('.js--scrollbar-point');


scrollBar.addEventListener('click', e => {
    scrollBarPoint.style.left = `${e.offsetX - 10}px`;
})