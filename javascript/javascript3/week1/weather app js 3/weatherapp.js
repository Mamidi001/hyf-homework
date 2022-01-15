//const api = 554d8bf7974b72d2c5ee9345756b000a;
const inputData = document.querySelector('.input-city');
const inputButton = document.querySelector('.btn-submit');
const displayData = document.querySelector('.displayData');
const displayInfo = document.querySelector('.displayInfo');
const locationButton = document.querySelector('.btn-location');

locationButton.addEventListener('click', (e)=>{
 e.preventDefault()
 const inputLocation = locationButton.value
 fetch()
})
inputButton.addEventListener('click',(event)=>{
  event.preventDefault()
  const inputValue = inputData.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ed227e29810b10809fa79d4dce17f3d9&units=metric
  `)
  .then(response=>response.json())
  .then(data=>{console.log(data)
    let sunRise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      let sunSet = new Date(data.sys.sunset * 1000).toLocaleTimeString();
function tempCalc()
   {if(data.main.temp <= 10){
    return 'Weather looks cold, have a warm drink';
  }
  else if(data.main.temp >10 && data.main.temp < 30){
    return 'Outside weather is pretty nice, go for a walk';
  }
  else{
    return'what a amazing day, go for swimming';
  }
   }
      
    displayInfo.innerHTML= 
    `<img src= "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
    class="main-weather-img"
    alt="${data.weather[0].description}"/>
    <p class = "para">${tempCalc()}</p>
    <h1>${data.name}</h1> 
    <h2>Temperature : <span class= "temp">${data.main.temp}°C</span></h2> 
    <h2>Wind speed : ${data.wind.speed}</h2>
    <h2>Feels like : ${data.main.feels_like}</h2>
   <h2>Cloudy : ${data.weather[0].main}</h2>
    <h2 class= "sunrise">Sunrise : ${sunRise}</h2>
    <h2>Sunset : <span class = "sunset">${sunSet}</span></h2>`;
  })
})

