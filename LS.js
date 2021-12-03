class LS {
    constructor() {
        this.defaultCity = 'Tallinn'
        this.city
    }
    getCityData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity
        } else {
            this.city = localStorage.getItem('city')
        }
        return this.city
    }

    setCityData(city){
        localStorage.setItem('city', city)
    }
}