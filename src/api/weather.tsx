import axios from "axios";
import appConfig from "config/appConfig";
import { IForecast } from "interfaces/forecast.interface";
import { ILocationForecastExtended } from "interfaces/location.iterface"

export const fetchCurrentWeather = async (location: { lon: number; lat: number; }): Promise<IForecast[]> => {
    const response = await axios.get(`${process.env.REACT_APP_RAPID_API_URL}/current`, {
        params: { lon: location.lon, lat: location.lat },
        headers: {
            'x-rapidapi-key': appConfig.rapidApiKey,
            'x-rapidapi-host': appConfig.rapidApiHost
        }
    });
    return response.data.data
}

export const fetchLocationWithForecasts = async (location: { lon: number; lat: number; }): Promise<ILocationForecastExtended> => {
    const response = await axios.get(`${process.env.REACT_APP_RAPID_API_URL}/forecast/daily`, {
        params: { lon: location.lon, lat: location.lat },
        headers: {
            'x-rapidapi-key': appConfig.rapidApiKey,
            'x-rapidapi-host': appConfig.rapidApiHost
        }
    });
    return response.data
}