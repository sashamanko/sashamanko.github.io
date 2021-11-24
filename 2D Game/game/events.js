import { config } from "./config.js";

window.addEventListener('keypress', (e) => {
    if (e.code == 'KeyG') {
        console.log('sd');
        config.gridState = !config.gridState
    }
})