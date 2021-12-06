// 1
// ────────────────────────────────────────────────────────────

class Circle {
    constructor() {
        this.radius = 0; // поле, хранящее радиус окружности
    }

    getRadius() {
        return this.radius;
    }

    getDiameter() {
        return this.radius * 2;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    square() {
        return Math.PI * (this.radius ** 2);
    }

    long() {
        (2 * Math.PI) * this.radius;
    }
}

// 2
// ────────────────────────────────────────────────────────────
// Шось похоже на те шо робили в каласі

class HtmlElement {
    constructor(tagName, text, objAttribute, objStyle, arrChildTags) {
        this.tagName = tagName;
        this.text = text;
        this.objAttribute = objAttribute;
        this.objStyle = objStyle;
        this.arrChildTags = arrChildTags;
    }

    addAttribute(block, objAttribute) {
        for (let key in objAttribute) {
            block.setAttribute(key, objAttribute[key]);
        }

        return block;
    }

    addStyle(block, objStyle) {
        for (let key in objStyle) {
            block.style[key] = objStyle[key];
        }

        return block;
    }

    addText(block, text) {
        block.textContent = text;

        return block;
    }

    prependChild(block, arrChildTags) {
        arrChildTags.forEach(element => {
            const childTag = document.createElement(element);

            block.prepend(childTag);
        });

        return block;
    }

    appendChild(block, arrChildTags) {
        arrChildTags.forEach(element => {
            const childTag = document.createElement(element);

            block.append(childTag);
        });

        return block;
    }

    getHtml() {
        let block = document.createElement(this.tagName);

        block = this.addAttribute(block, this.objAttribute);
        block = this.addStyle(block, this.objStyle);

        block = this.addText(block, this.text);

        block = this.prependChild(block, this.arrChildTags);
        block = this.appendChild(block, this.arrChildTags);

        return block;
    }
}

const htmlElement = new HtmlElement('p', 'Text', { id: 'id', class: 'class' }, { color: '#fff', background: '#000' }, ['b', 'i']);

document.body.prepend(htmlElement.getHtml());

// 3
// ────────────────────────────────────────────────────────────
// Зробив шо поняв и як поняв
class CssClass {
    constructor(cssClass, arrStyle) {
        this.cssClass = cssClass;
        this.arrStyle = arrStyle;
    }

    addStyle(cssClass, arrStyle) {
        const newCssClass = `.${cssClass} {\n${arrStyle.join('\n')}\n}`

        document.querySelector('style').append(newCssClass);
    }

    getCss() {
        this.addStyle(this.cssClass, this.arrStyle)
        const css = document.querySelector('style').innerHTML;


        document.write(css)

        return css
    }
}

const cssClass = new CssClass('c-white', ['color: #fff;', 'background: #000;']);

cssClass.getCss();