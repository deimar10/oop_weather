// Weather object
const weather = new Weather('Tallinn')
console.log(weather.getWeather())
// UI object
const ui = new UI()

// events
const form = document.querySelector('#change-city')
form.addEventListener('submit', changeCityWeather)

function changeCityWeather(event){
    const city = document.querySelector('#city-name').value
    weather.changeCity(city)
    getWeather()
    document.querySelector('#city-name').value = ''
    event.preventDefault()
}

function getWeather(){
     weather.getWeather()
    .then(data => {
        console.log(data)
        ui.drawWeather(data)
    })
         .catch(error => console.log(error))
}
getWeather()
