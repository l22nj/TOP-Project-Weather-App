import { ApiGetter } from "./getter.js";
import { ApiProcessor } from "./processor.js";
import { WeatherDisplayer } from "./display.js";

class WeatherStation {
    constructor() {
        this.lastRequestFailed = false;
        this.currentAPI = null;
        this.currentWeatherObject = null;
        this.processor = ApiProcessor(this);
        this.getter = ApiGetter(this);
        this.display = WeatherDisplayer(this);
    }
    log() {
        console.log("working weatherObject:");
        console.log(this.currentWeatherObject);
    }
    logAPI() {
        console.log("working weather API:");
        console.log(this.currentAPI);
    }
    async getWeather(location) {
        try {
            console.log("Getting weather...");
            let response = await this.getter.getAPI(location);
            this.currentAPI = response;
            let weatherObject = this.processor.makeWeatherObject(this.currentAPI);
            this.currentWeatherObject = weatherObject;
            console.log("Done!");
            this.lastRequestFailed = false;
            this.logAPI();
            this.log();
        } catch (error) {
            console.log("Failed!");
            this.lastRequestFailed = true;
        }
    }
    async newWeather(location) {
        await this.getWeather(location);
        this.display.makeWeatherBox();
    }
}

export default new WeatherStation();