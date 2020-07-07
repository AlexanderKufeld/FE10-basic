
function getWeather() {
    let checkCountry = document.getElementById('country').value;
    let checkCity = document.getElementById('city').value;
    let appID = 'bed156d40174100c73406417523ddaf1';
        fetch('http://api.openweathermap.org/data/2.5/weather?country='+checkCountry+'&q='+checkCity+'&APPID='+appID)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            document.querySelector('table').innerHTML = 'Temperature in ' + checkCity + ' is ' + data.main.temp +' fahrenheit ' + ' <br> ' + 'Wind speed: ' + data.wind.speed + ' m/s '
        })
    }
    