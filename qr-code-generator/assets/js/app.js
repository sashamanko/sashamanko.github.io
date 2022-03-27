const form = document.querySelector('.form');
const qrImg = document.querySelector('.card__img');

form.addEventListener('submit', (e) => {
    e.preventDefault(false);

    if (form.text.value.length !== 0) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${form.text.value}`;
        qrImg.dataset.visibility = true
    } else {
        console.log('sfg');
    }
})