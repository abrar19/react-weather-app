const API_KEY = "59827315db0e034f42e9f69249b52a20";
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

//Example query from wearher API
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
//Onecall Weather API
//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API_KEY}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    
    const fetchData = fetch(url).then((res) => res.json());
    return fetchData;
}

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data;

    const {main:details, icon} = weather[0]

    return {
        lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed
    }
}

const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1, 6).map();
}

const getFormattedWeatherData = async(searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;

    

    const formattedForecastWeather = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: "current, minutely, alerts",
        units: searchParams.units
    }).then(formatForecastWeather)

    return formattedCurrentWeather;
}

export default getFormattedWeatherData;