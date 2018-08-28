class Weather{
    constructor(city, state){
        this.apiKey = 'b395a13b2ce9e730';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from api
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    //Change location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}