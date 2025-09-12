const HOURS_IN_DAY = 24;
const currentDays = 15; // max: 15
const currentParameters = [
    "cloudcover",
    "temp",
    "humidity",
    "winddir",
    "windspeed",
    "icon",
    "datetime",
]

const ApiProcessor = function(station) {

    function makeWeatherObject(api) {
        let weatherObject = {};
        weatherObject.address = api.address;
        weatherObject.currentConditions = {};
        weatherObject.days = [];

        for (let p of currentParameters) {
            weatherObject.currentConditions[p] = api.currentConditions[p];
        }
        for (let i = 0; i < currentDays; i++) {
            weatherObject.days.push({
                hours: [],
            });
            for (let p of currentParameters) {
                weatherObject.days[i][p] = api.days[i][p];
            }
            for (let j = 0; j < HOURS_IN_DAY; j++) {
                weatherObject.days[i].hours.push({});
                for (let p of currentParameters) {
                    weatherObject.days[i].hours[j][p] = api.days[i].hours[j][p];
                }
            }
        }
        return weatherObject;
    }
    return { makeWeatherObject, }
}

export { ApiProcessor, currentParameters };