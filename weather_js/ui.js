class UI{
    constructor(){
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string'); 
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.dewpoint = document.querySelector('#w-dewpoint');
        this.wind = document.querySelector('#w-wind');
    }

    paint(weather){
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temp_c + ' °C';
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `Relative humidity: ${weather.relative_humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.feelslike_c} °C`;
        this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_c} °C`;
        this.wind.textContent = `Wind: ${weather.wind_string}`;

    }
}