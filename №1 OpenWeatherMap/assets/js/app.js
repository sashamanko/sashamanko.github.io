document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        alert(`${lat} ${lon}`)

        init()
    })
})

let lat = 0,
    lon = 0;

function init() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f3a2fb24ec446e00dec092117e588fc5`)
        .then((resp) => { return resp.json() })
        .then((data) => {
            console.log(data);
            // imgBlock.innerHTML = `<img class='weather-img' src="http://openweathermap.org/img/w/` + data.weather[0].icon + `.png "></img>`

            // tempBlock.textContent = `${temperature()}°`

            // cityBlock.textContent = `City: ${data.name}`

            console.log()

            function temperature() {
                let getTemp = data.main.temp
                let tempC = Math.floor(getTemp) - 273
                return tempC
            }

            let date = new Date;

            // update_date.textContent = `Update time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

            // console.log('перезапуск')
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