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
    show() {
        console.log(this.currentWeatherObject);
    }
    showAPI() {
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
        } catch (error) {
            console.log("Failed!");
            this.lastRequestFailed = true;
        }
    }
}

export default new WeatherStation();