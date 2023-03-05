const API_KEY = "caccbd6234d502e0445b99678af4e4d2";

function successGEO(position) { 
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const lang = "kr";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&units=metric`;
  console.log(url);
  
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = data.name;
  });
}

function errorGEO() {
  console.log("Error GEO");
}

navigator.geolocation.getCurrentPosition(successGEO, errorGEO);