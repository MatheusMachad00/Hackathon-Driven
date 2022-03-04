/* Variáveis globais */
const API_KEY = "9aed8b2c740636f0f6c9c48b422314c4"


/* Funções */

let request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=8&lon=34&appid=${API_KEY}`);
request.then(generateHTML);

function generateHTML (answer){
    console.log(answer);
    let temp = (answer.data.main.temp - 273.15);
    const section = document.querySelector(".weather");
    section.innerHTML += "";
    section.innerHTML += `<p>${temp.toFixed(1)}°C, ${answer.data.weather[0].description}</p>
    <img src="http://openweathermap.org/img/wn/${answer.data.weather[0].icon}@2x.png" alt="icon">`;
}

function temperatureConverter(answer) {
    answer.data.main.temp
    answer.data.main.temp = parseFloat(answer.data.main.temp);
    document.getElementById("outputCelcius").innerHTML=answer.data.main.temp-273.15;
    console.log()
}

