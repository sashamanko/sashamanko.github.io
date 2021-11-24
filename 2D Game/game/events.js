import { config } from "./config.js";

window.addEventListener('keypress', (e) => {
    if (e.code === 'KeyG') config.gridState = !config.gridState;
})