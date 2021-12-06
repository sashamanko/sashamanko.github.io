const books = document.querySelectorAll('.js--book');

books.forEach(elem => {

    elem.addEventListener('mouseover', () => {
        if (!elem.classList.contains('active')) {
            elem.addEventListener('click', (e) => {
                books.forEach(elem => elem.classList.remove('active'))
                e.target.classList.add('active');
            })
        } else if (elem.classList.contains('active')) {
            elem.addEventListener('click', (e) => {
                e.target.classList.remove('active');
            })
        }
    })


})