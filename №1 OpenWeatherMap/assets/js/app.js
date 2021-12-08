const searchInput = document.querySelector('.js--search-input');

let api;

document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(onSuccess, error => {
        console.error(error);
    })
})

function onSuccess(position) {
    const { latitude, longitude } = position.coords;

    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f3a2fb24ec446e00dec092117e588fc5`;

    init()
}

function init() {
    fetch(api)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {

            console.log(data);

            function temperature() {
                let getTemp = data.main.temp
                let tempC = Math.floor(getTemp) - 273
                return tempC
            }

            let date = new Date;

            searchInput.placeholder = data.name;
        })
        // .catch(() => {
        //     alert('This city not found')
        //     city = 'London';
        //     init()
        //     searchInp.value = ''
        // })
}



// Информация
// ────────────────────────────────────────────────────────────
// f3a2fb24ec446e00dec092117e588fc5 | API ключ
//
// Вызовы API
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} | По названию города
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} | По географическим координатам
//