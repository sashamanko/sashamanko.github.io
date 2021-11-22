import { RenderHTML } from "./render-html.js";

export class GameCore {
    html = new RenderHTML();

    canvas(width, height) {

        this.html.RenderCanvas(width, height);
        this.html.LinkCSS();
    }
};