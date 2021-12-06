const tooltips = document.querySelectorAll('.js--tooltip');

tooltips.forEach(elem => {

    elem.addEventListener('mouseover', (e) => {
        const body = document.body,
            tooltipBox = document.createElement('div'),
            tooltipBoxArrow = document.createElement('div');
        tooltipBox.classList.add('js--tooltip-box');


        body.append(tooltipBox);
        tooltipBox.append(tooltipBoxArrow);

        tooltipBox.innerText = e.target.dataset.tooltipText;
        if (e.target.offsetTop < tooltipBox.clientHeight + 15) {
            tooltipBox.classList.add('top')
            tooltipBox.style.top = `${e.target.offsetTop + e.target.clientHeight + 20}px`;
        } else {
            tooltipBox.classList.add('bottom')
            tooltipBox.style.top = `${e.target.offsetTop - tooltipBox.clientHeight - 15}px`;
        }

        tooltipBox.style.left = `${elem.offsetLeft + (e.target.clientWidth - tooltipBox.clientWidth) / 2}px`;
        tooltipBox.style.opacity = 1;
    })

    elem.addEventListener('mouseout', (e) => {
        document.body.removeChild(document.querySelector(".js--tooltip-box"));
    })
})