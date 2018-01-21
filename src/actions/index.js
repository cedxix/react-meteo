import axios from 'axios';

const API_KEY = '7ae52a55bb6714aeb2c6a532ab027c8c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// action type
const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * Fetch Weather action
 */
const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
};


export {fetchWeather, FETCH_WEATHER}