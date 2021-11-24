import { RenderHTML } from "./render-html.js";
import { Grid } from "./grid.js";
import { config } from './config.js'
import './events.js'



export class GameCore {
    _HTML = new RenderHTML();

    _RenderHTML() {
        this._HTML.LinkCSS();
    }

    _Engine() {
        window.addEventListener('keypress', (e) => {
            if (config.gridState) {
                let grid = new Grid(this._HTML._ctx);
                grid.draw()

            } else if (!config.gridState) {
                this._HTML._ctx.clearRect(0, 0, this._HTML._canvas.width, this._HTML._canvas.height);
            }

        })

    }

    _GameLoop() {
        this._Engine()
        requestAnimationFrame(() => this._GameLoop());
    }

    init() {
        this._RenderHTML()
        this._GameLoop();
    }
};