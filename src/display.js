import { currentParameters } from "./processor"
const textListCurrentParameters = [
    "Cloud cover: ",
    "Temperature: ",
    "Humidity: ",
    "Wind direction: ",
    "Wind speed: ",
    "Icon: ",
    "Date/time: ",
]
const weatherDisplayBox = document.getElementById('weather-display-box')

const WeatherDisplayer = function(station) {
    function makeWeatherBox(weatherObj) {
        const box = document.createElement("div");
        box.classList.add("weatherbox");

        if (currentParameters.length !== textListCurrentParameters.length) {
            throw new Error("Internal error: currentParameters.length != textListCurrentParameters.length");
        }

        for (let i = 0; i < currentParameters.length; i++) {
            const parameter = document.createElement("div");
            parameter.classList.add("parameter");
            parameter.classList.add(currentParameters[i]);
            parameter.innerText = textListCurrentParameters[i];
            box.appendChild(parameter);
        }
        weatherDisplayBox.appendChild(box);
    }

    function clear() {
        weatherDisplayBox.innerHTML = "";
    }
    return { makeWeatherBox, clear };
}

export { WeatherDisplayer };