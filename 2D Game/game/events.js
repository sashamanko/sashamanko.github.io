import { config } from "./config.js";

window.addEventListener('keypress', (e) => {
    if (e.key == 'g') {
        console.log('sd');
        config.gridState = !config.gridState
    }
})