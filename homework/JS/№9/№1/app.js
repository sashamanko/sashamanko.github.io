const messageList = document.querySelector('.js--message-list'),
    form = document.querySelector('.js--form');

const getFullDate = () => {
    const date = new Date()

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}

const getFullTime = () => {
    const date = new Date()

    let zeroH = '',
        zeroM = '',
        zeroS = '';

    if (date.getHours().toString().length == 1) {
        zeroH = 0;
    }

    if (date.getMinutes().toString().length == 1) {
        zeroM = 0;
    }

    if (date.getSeconds().toString().length == 1) {
        zeroS = 0;
    }

    return `${zeroH}${date.getHours()}:${zeroM}${date.getMinutes()}:${zeroS}${date.getSeconds()}`;
}




form.addEventListener('submit', e => {
    e.preventDefault(false);

    const messageListItem = document.createElement('div'),
        messageListItem__name = document.createElement('h3'),
        messageListItem__data = document.createElement('data'),
        messageListItem__text = document.createElement('p');

    messageListItem.classList.add('message-list__item');
    messageListItem__name.classList.add('message-list__item__name');
    messageListItem__data.classList.add('message-list__item__data');
    messageListItem__text.classList.add('message-list__item__text');

    messageListItem__name.textContent = form.name.value;
    messageListItem__data.textContent = `${getFullTime()} ${getFullDate()}`;
    messageListItem__text.textContent = form.message.value;

    messageListItem.append(messageListItem__name)
    messageListItem.append(messageListItem__data)
    messageListItem.append(messageListItem__text)


    messageList.append(messageListItem);

    form.remove()
})