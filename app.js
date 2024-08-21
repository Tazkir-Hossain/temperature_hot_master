//////////Button Action//////////
const btn = document.getElementById("searchBtn");
btn.addEventListener("click", function () {
  searchTemparature();
});
////// api call//////////
const apiKey = "46ad7457603b9b0104e633e78cd60e16";
function searchTemparature() {
  const city = document.getElementById("city-name").value;
  if (city === "") {
    alert("Pleace Enter A City Name");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("city-name-display").innerText = data.name;
      document.getElementById("temperature").innerText = data.main.temp;
      document.getElementById("weather-description").innerText =
        data.weather[0].main;
      document.getElementById(
        "weather-icon"
      ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}
