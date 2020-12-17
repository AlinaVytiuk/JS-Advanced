var humidity = document.querySelector('.humidity .value');
var pressure = document.querySelector('.pressure .value');
var temperature = document.querySelector('.temperature .value');
var temperatureBig = document.querySelector('.temperatureBig');
var windSpeed = document.querySelector('.wind-speed .value');
var weatherSummary = document.querySelector('#weather-summary');
var getWeatherButton = document.querySelector('#get-weather');
var feelsLike = document.querySelector('.feels-like .value');
var userLocation = document.querySelector('.location');


var dateDay = document.querySelector('.date-day');
var nowDate = new Date().toLocaleString('eng',
    {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
dateDay.innerHTML = nowDate;

var dateDayName = document.querySelector('.date-dayname');
var nowDateDayName = new Date();
var options = { weekday: 'long'};
dateDayName.innerHTML = new Intl.DateTimeFormat('en-US', options).format(nowDateDayName);

function getLocationCoords() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        });
    } else {
        alert('Your browser does not support Navigator API');
    }
}

function getWeatherData(latitude, longitude) {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=08d1316ba8742c08076e7425c28c2614')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
}

function displayData(data) {
    var t = kToC(data.main.temp) + '°C';
    temperature.innerText = t;
    temperatureBig.innerHTML = t;
    feelsLike.innerHTML = kToC(data.main.feels_like) + '°C';
    humidity.innerText = data.main.humidity + '%';
    pressure.innerText = toAtmospherePressure(data.main.pressure) + 'мм. рт. ст.';
    windSpeed.innerText = data.wind.speed + 'м/сек';
    userLocation.innerHTML = data.name;
    console.log(data);

    var weatherSummaryText = '';
    data.weather.forEach(function (item) {
        weatherSummaryText += (item.main + ' ');
    });
    weatherSummary.innerText = weatherSummaryText;

}

function kToC(k) {
    return Math.round(k - 273);
}

function toAtmospherePressure(gPa) {
    return Math.round(gPa * .75)
}

getWeatherButton.addEventListener('click', getLocationCoords);