export class RenderHTML {
    RenderCanvas(width, height) {
        this.width = width;
        this.height = height;

        const canvas = document.createElement('canvas');
        canvas.id = 'game-canvas';
        canvas.style.cssText = `width: ${width}px; height: ${height}px;`;

        const ctx = canvas.getContext('2d');
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        document.body.prepend(canvas);

    }

    LinkCSS() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './game/css/style.css';

        document.head.append(link);
    }
};