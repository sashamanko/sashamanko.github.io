import { RenderHTML } from "./render-html.js";
import { Grid } from "./grid.js";
import { config } from './config.js'
import './events.js'

export class GameCore {
    _HTML = new RenderHTML();

    getCtx() {
        return this._HTML._ctx;
    }

    _RenderHTML() {
        this._HTML.LinkCSS();
        this._HTML.RenderCanvas();
    }

    _Engine() {
        window.addEventListener('keypress', (e) => {
            if (config.gridState) {
                let grid = new Grid(this.getCtx());
                grid.draw()

            } else if (!config.gridState) {
                this.getCtx().clearRect(0, 0, this._HTML._canvas.width, this._HTML._canvas.height);
            }

        })

    }

    init() {
        this._RenderHTML()
        this._GameLoop();
    }

    _GameLoop() {
        this._Engine()
        requestAnimationFrame(() => this._GameLoop());
    }

};