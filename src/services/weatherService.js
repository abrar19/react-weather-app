const API_KEY = "59827315db0e034f42e9f69249b52a20";
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

//Example query from wearher API
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    
    console.log(url);
    
    const fetchData = fetch(url).then((res) => res.json()).then((data)=>data);

    return fetchData;
}

export default getWeatherData;