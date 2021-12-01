export class Props {
    constructor(title) {
        this.title = title;
    }

    pushProps(fatherBlock) {
        const propsBody = document.createElement('div'),
            propsTitle = document.createElement('h2');

        propsBody.classList.add('props-list__item');
        propsTitle.classList.add('props-list__item__title');

        propsTitle.innerText = this.title;

        propsBody.append(propsTitle);

        fatherBlock.prepend(propsBody);
    }
}