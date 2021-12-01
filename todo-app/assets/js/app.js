import { Props } from "./props.js";

const input = document.querySelector('.input-block__input'),
    input_btn = document.querySelector('.input-block__btn'),
    propsList = document.querySelector('.props-list'),
    propsMenu = document.querySelector('.props-menu');

const propsArray = [];

input.addEventListener('input', () => {
    if (input.value.length !== 0 && filter(input.value)) {
        input_btn.classList.add('d-flex');
    } else {
        input_btn.classList.remove('d-flex');
    }
})

input_btn.addEventListener('click', () => {
    const props = new Props(input.value);
    propsArray.push(props);
    input.value = '';
    input_btn.classList.remove('d-flex');

    propsList.innerHTML = ''
    for (let key of propsArray) {
        key.pushProps(propsList)
    }

    const propsItem = document.querySelectorAll('.props-list__item');
    propsItem.forEach(elem => {
        elem.addEventListener('click', () => {
            renderPropsMenu(elem.querySelector('.props-list__item__title').innerText)
        })
    })
})

function filter(text) {
    if (text.trim().length == 0) {
        return false;
    } else {
        return true;
    }
}

function renderPropsMenu(title) {
    propsMenu.classList.add('active');

    const propsMenuTitle = document.querySelector('.props-menu__title');
    propsMenuTitle.innerHTML = title;
}