const weather = document.querySelector('.js-weather');
const weatherBox = document.querySelector('.weather-box');

const COORDS = 'coords';
const API_KEY = '52562c5811bdc86c54863b51dd3586a6';

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords){
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }else{
    askForCoords();
  }
}

function getWeather(lat, lon){
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
    .then(function(response){
      return response.json();
    }).then(function(json){
      const temperature = json.main.temp;
      const description = json.weather[0].description;
      const image = new Image();
      image.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
      weatherBox.insertBefore(image, weather);
      weather.innerText = `${Math.round(temperature)}˚ ${description}`;
    })
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(coordsObj.latitude, coordsObj.longitude);
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError() {
  console.log('Can`t Access');
}

function init() {
  loadCoords();
}

init();