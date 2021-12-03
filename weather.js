class Weather {
    constructor(city) {
        this.city = city
        this.key = 'c7f0a59cfe061fccd27eceaf4d8bb0a8'
    }
    // fetch funktsioon
    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
}