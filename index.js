var cityName= document.getElementById("fname")

var inputBtn = document.querySelector(".searchBtn")

var searchCity = function(){
console.log(cityName.value)
fetch(`HTTPS://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=1f08173ff1caa3479f9f6c63e313feba`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(weather => {
      console.log(weather)
      console.log(weather.coord.lon)
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}
inputBtn.addEventListener("click", searchCity)