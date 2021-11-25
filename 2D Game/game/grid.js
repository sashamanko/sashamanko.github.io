export class Grid {
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw() {
        for (let x = 0; x <= 1200; x += 64) {
            this.ctx.fillRect(x, 0, 1, 700);
            this.ctx.stroke();

            if (x !== 0) {
                this.ctx.fillRect(x - 1, 0, 1, 700);
                this.ctx.stroke();
            }
        }
        for (let y = 0; y <= 700; y += 64) {
            this.ctx.fillRect(0, y, 1200, 1);
            this.ctx.stroke();

            if (y !== 0) {
                this.ctx.fillRect(0, y - 1, 1200, 1);
                this.ctx.stroke();
            }
        }
    }

}