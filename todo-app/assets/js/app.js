const input = document.querySelector('.input-block__input'),
    input_btn = document.querySelector('.input-block__btn'),
    propsList = document.querySelector('.props-list'),
    propsMenu = document.querySelector('.props-menu');

let propsItem = document.querySelectorAll('.props-list__item');

const propsArray = []

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
        key.pushProps()
    }

    propsItem = document.querySelectorAll('.props-list__item');

    propsItem.forEach(elem => {
        elem.addEventListener('click', (e) => {
            propsMenu.classList.add('active');

        })
    })
})


class Props {
    constructor(title) {
        this.title = title;
    }

    pushProps() {
        const propsBody = document.createElement('div'),
            propsTitle = document.createElement('h2');

        propsBody.classList.add('props-list__item');
        propsTitle.classList.add('props-list__item__title');

        propsTitle.innerText = this.title;

        propsBody.append(propsTitle);

        propsList.prepend(propsBody);
    }
}

function filter(text) {
    if (text.trim().length == 0) {
        return false;
    } else {
        return true;
    }
}