var humidity = document.querySelector('.humidity .value');
var windSpeed = document.querySelector('.wind-speed .value');
var pressure = document.querySelector('.pressure .value');
var temperature = document.querySelector('.temperature-info .value');
var temperatureMax = document.querySelector('.temperature-max');
var temperatureMin = document.querySelector('.temperature-min');
var weatherSummary = document.querySelector('.weather-summary__title');
var userLocation = document.querySelector('.location__city');
var weatherImage = document.querySelector('.weather-summary__image');
var dateDay = document.querySelector('.weather-date__day');
var nowDate = new Date().toLocaleString('eng',
    {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
dateDay.innerHTML = nowDate;

var dateDayName = document.querySelector('.weather-date__dayname');
var nowDateDayName = new Date();
var options = { weekday: 'long'};
dateDayName.innerHTML = new Intl.DateTimeFormat('en-US', options).format(nowDateDayName);

function getWeatherData(city) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=08d1316ba8742c08076e7425c28c2614')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
}

function displayData(data) {
    temperature.innerText = kToC(data.main.temp);
    temperatureMax.innerHTML = kToC(data.main.temp_max) + '°C';
    temperatureMin.innerHTML = kToC(data.main.temp_min) + '°C';
    humidity.innerText = data.main.humidity + '%';
    pressure.innerText = toAtmospherePressure(data.main.pressure) + ' мм. рт. ст.';
    windSpeed.innerText = data.wind.speed + ' м/сек';
    userLocation.innerHTML = data.name;

    // console.log(data);

    var weatherSummaryText = '';
    data.weather.forEach(function (item) {
        weatherSummaryText += (item.main + ' ');
    });
    weatherSummary.innerText = weatherSummaryText;
    weatherImage.src = 'image/weather/' + weatherSummaryText.trim().toLowerCase() + '.svg';
}

function kToC(k) {
    return Math.round(k - 273);
}

function toAtmospherePressure(gPa) {
    return Math.round(gPa * .75)
}

// getWeatherButton.addEventListener('click', getLocationCoords);
getWeatherData('Kyiv');

