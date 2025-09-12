const ApiGetter = function(station) {
    const API_KEY = 'Y5224NDU5WRWB9X3XKLYND3LU';
    async function getAPI(location) {
        try {
            let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            let json = await response.json();
            return json;
        } catch (error) {
            console.log(error.message);
        }
    }
    return { getAPI, };
}

export { ApiGetter };