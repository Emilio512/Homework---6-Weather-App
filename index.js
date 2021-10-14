var cityName= document.getElementById("fname")

var inputBtn = document.querySelector(".searchBtn")
var showCity = document.querySelector("#city")
var showTemp = document.querySelector("#temp")
var showWind = document.querySelector("#wind")
var showHumidity = document.querySelector("#humidity")
var showUv = document.querySelector("#uv")
var showContent1 = document.querySelector("#content1")
var showContent2 = document.querySelector("#content2")
var showContent3 = document.querySelector("#content3")
var showContent4 = document.querySelector("#content4")
var showContent5 = document.querySelector("#content5")

var searchCity = function(){
console.log(cityName.value)
fetch(`HTTPS://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=1f08173ff1caa3479f9f6c63e313feba&units=imperial`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(weather => {
    var lat = weather.coord.lat
    console.log(lat)
    var lon = weather.coord.lon
    showTemp.textContent = "Temp: " + weather.main.temp 
    showHumidity.textContent = "Humidity: " + weather.main.humidity
    showWind.textContent = "Wind: " + weather.wind.speed


      console.log(lon)
      console.log(weather)
      console.log(weather.coord.lon)

fetch(`HTTPS://api.openweathermap.org/data/2.5/onecall?lat=` + lat + `&lon=` + lon + `&units=imperial&exclude=hourly&appid=1f08173ff1caa3479f9f6c63e313feba`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(weather => {
      console.log(weather)
      showUv.textContent ="UV: " + weather.current.uvi;
      showContent1.children[0].textContent="Temp: " + weather.daily[1].temp.day;
      showContent1.children[1].textContent="Humidity :" + weather.daily[1].humidity;
      showContent1.children[2].textContent="Wind: " + weather.daily[1].wind_speed;
      showContent2.children[0].textContent="Temp: " + weather.daily[2].temp.day;
      showContent2.children[1].textContent="Humidity :" + weather.daily[2].humidity;
      showContent2.children[2].textContent="Wind: " + weather.daily[2].wind_speed;
      showContent3.children[0].textContent="Temp: " + weather.daily[3].temp.day;
      showContent3.children[1].textContent="Humidity :" + weather.daily[3].humidity;
      showContent3.children[2].textContent="Wind: " + weather.daily[3].wind_speed;
      showContent4.children[0].textContent="Temp: " + weather.daily[4].temp.day;
      showContent4.children[1].textContent="Humidity :" + weather.daily[4].humidity;
      showContent4.children[2].textContent="Wind: " + weather.daily[4].wind_speed;
      showContent5.children[0].textContent="Temp: " + weather.daily[5].temp.day;
      showContent5.children[1].textContent="Humidity :" + weather.daily[5].humidity;
      showContent5.children[2].textContent="Wind: " + weather.daily[5].wind_speed;

      console.log(weather.daily[0])
      // console.log(weather.coord.lat)
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  })
  // .catch(error => {
  //   console.error('There has been a problem with your fetch operation:', error);
  // });
}


inputBtn.addEventListener("click", searchCity)













var showWeather = weather => {
  var WeatherDiv = document.querySelector(".card-content");
  // characters.forEach(character => {
    WeatherDiv = document.createElement("p");
    characterElement.innerText = `Character Name: ${character.name}`;
    charactersDiv.append(characterElement);
  // });
}