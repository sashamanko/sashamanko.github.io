const ball = document.querySelector('.js--ball'),
    game = document.querySelector('.js--game');

let mousX = 0,
    mousY = 0;

let gameZone = {
    x1: {
        x: 80,
        y: 30
    },
    x2: {
        x: 1370,
        y: 795
    }
}


game.addEventListener('mousemove', (e) => {
    let mousX = e.offsetX,
        mousY = e.offsetY;

    if (mousX > gameZone.x1.x && mousX < gameZone.x2.x && mousY > gameZone.x1.y && mousY < gameZone.x2.y) {
        ball.style.top = `${mousY -50}px`;
        ball.style.left = `${mousX -50}px`;
    }



})