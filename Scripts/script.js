/* Variáveis globais */
const API_KEY = "9aed8b2c740636f0f6c9c48b422314c4"
let lati, long;

/* Funções */

function getYourWeather (){
    let request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&lang=pt_br`);
    request.then(generateHTML);
    request.catch();
}

function generateHTML (answer){
    console.log(answer);
    let temp = (answer.data.main.temp - 273.15);
    const section = document.querySelector(".weather");
    section.innerHTML = "";
    section.innerHTML += `<p>${temp.toFixed(1)}°C, ${answer.data.weather[0].description}</p>
    <img src="http://openweathermap.org/img/wn/${answer.data.weather[0].icon}@2x.png" alt="icon">`;
}

function getLocation (){
    let userCity = document.getElementById("city").value;
    let request = axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${userCity}&limit=1&appid=${API_KEY}`);
    request.then(userLocation);
    request.catch();
}

function userLocation (location){
    lati = location.data[0].lat;
    long = location.data[0].lon;
}

/* function autoLocation(){
    let location = confirm("Você deseja saber o clima de sua atual localização?");
    if (location){
        autoLocationAPI();
    }
}

function autoLocationAPI(){
    let request = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${userCity}&limit=1&appid=${API_KEY}`);
    request.then(userLocation);
    request.catch();
} */

var input = document.getElementById("city");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});