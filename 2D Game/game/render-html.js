export class RenderHTML {
    constructor() {
        this._gameContainer = '';
        this._canvas = {
            width: '',
            height: '',
        };
        this._ctx;
    }

    LinkCSS() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './game/css/style.css';

        document.head.append(link);
    }

    RenderGameContainer() {
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        this._gameContainer = document.querySelector('.game-container')

        document.body.prepend(gameContainer);
    }

    RenderCanvas(width = window.innerWidth, height = window.innerHeight) {
        this.width = width;
        this.height = height;

        const canvas = document.createElement('canvas');
        canvas.id = 'game-canvas';
        canvas.style.cssText = `width: ${width}px; height: ${height}px;`;

        const context = canvas.getContext('2d');
        context.canvas.width = width;
        context.canvas.height = height;

        this._canvas.width = width;
        this._canvas.height = height;
        this._ctx = context;

        document.body.prepend(canvas);
    }
};