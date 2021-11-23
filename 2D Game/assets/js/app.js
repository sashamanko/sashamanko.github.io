import { GameCore } from "../../game/main.js";

const game = new GameCore

game.HTML.RenderCanvas(1200, 700);
game.HTML.LinkCSS();




var canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');


for (let x = 0; x <= 1200; x += 64) {
    for (let y = 0; y <= 700; y += 64) {
        ctx.fillRect(x, 0, 1, 700);
        ctx.stroke();

        ctx.fillRect(0, y, 1200, 1);
        ctx.stroke();
        if (x && y !== 0) {
            ctx.fillRect(x + 1, 0, 1, 700);
            ctx.stroke();

            ctx.fillRect(0, y + 1, 1200, 1);
            ctx.stroke();
        }
    }
}