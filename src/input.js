const form = document.getElementById("weather-form");
import station from "./weatherStation.js";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    station.newWeather(city);
    form.reset();
})

window.station = station;