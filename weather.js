//alert("second");

class Weather   {
    constructor(zip){
        this.apiKey = 'a7a0de22a1b91e73218e6f5d9ad61e5c';
        this.zip = zip;
    }

    // Fetch weather from API
    async getWeather()  {
        const response = await fetch
        (`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&units=imperial&APPID=${this.apiKey}`);

        /* this worked in browser
        https://api.openweathermap.org/data/2.5/weather?zip=30273,us&APPID=a7a0de22a1b91e73218e6f5d9ad61e5c
        */

        const responseData = await response.json();

        return responseData.main;
    }

    // Change weather location
    changeLocation(zip) {
        this.zip = zip;
    }
}

