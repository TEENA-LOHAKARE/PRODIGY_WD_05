
const apiKey = '358e7764dba9d4cfb2cd60ea00e32981';

async function fetchWeather() {
    const location = document.getElementById('location-input').value;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey + '&units=metric';

    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();

        if (weatherData.cod !== 200) {
            
            document.getElementById('weather-info').innerHTML = '<p>Location not found. Please try again.</p>';
            return;
        }

        const weatherInfo = '<h3>' + weatherData.name + ', ' + weatherData.sys.country + '</h3>' +
                            '<p>' + weatherData.weather[0].description + '</p>' +
                            '<p>Temperature: ' + weatherData.main.temp + '°C</p>' +
                            '<p>Feels like: ' + weatherData.main.feels_like + '°C</p>' +
                            '<p>Humidity: ' + weatherData.main.humidity + '%</p>' +
                            '<p>Wind Speed: ' + weatherData.wind.speed + ' m/s</p>';

        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
}