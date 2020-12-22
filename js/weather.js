const weather = document.querySelector('.js-weather');

const API_KEY = '2f2b6b67a02bb5807af50c7cb0c59bdf';
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log('Cant access geo location');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {
        //getWeather
        const parseCoords = JSON.parse(loadedCords);
        //console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();