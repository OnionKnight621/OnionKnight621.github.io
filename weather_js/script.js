//Init local stor obj
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();//Init Weather obj
const weather = new Weather(weatherLocation.city,weatherLocation.state);
//Init ui obj
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;

    //Change location
    weather.changeLocation(city, state);

    //Set location in local storage
    storage.setLocationData(city, state);

    //Get ad display weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
