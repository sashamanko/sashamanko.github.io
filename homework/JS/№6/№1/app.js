const input = document.querySelector('.js--input');

let inputValue = '';

input.addEventListener('input', (e) => {

    if (parseInt(e.data)) {
        input.value = value;
    } else {
        value = input.value;
    }
})