const card = document.querySelector('.card');
const menu = document.querySelector('.menu');
const form = document.querySelector('.form');
const qrImg = document.querySelector('.card__img');

const saveBtn = document.querySelector('.js--save-btn');
const downloadBtn = document.querySelector('.js--download-btn');
const infoBtn = document.querySelector('.js--info-btn');

const saveQR = (blob) => {
    downloadBtn.setAttribute("href", URL.createObjectURL(blob));
    downloadBtn.setAttribute("download", `Qr-Code`);
 }

form.addEventListener('submit', (e) => {
    e.preventDefault(false);

    if (form.text.value.length !== 0) {

        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${form.text.value}&format=png`;

        fetch('https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${form.text.value}&format=png')
            .then(response_object=>response_object.blob())
            .then(blob_object=>saveQR(blob_object))

        card.classList.add('active');
        menu.classList.add('active');

        qrImg.dataset.visibility = true;

    } else {
        console.log('sfg');
    }
})

form.text.addEventListener("keyup", () => {
    if(!form.text.value.trim()) {

        card.classList.remove("active");
        menu.classList.remove("active");

        qrImg.dataset.visibility = false;
    }
});