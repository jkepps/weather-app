import axios from 'axios';
import {WeatherData} from 'src/models/WeatherData';

interface OpenWeatherResponse {
  current: {
    temp: number;
    feels_like: number;
    wind_deg: number;
    wind_speed: number;
    weather: Array<{main: string}>;
  };
  daily: Array<{
    dt: number;
    temp: {min: number; max: number};
    weather: Array<{main: string}>;
  }>;
}

class WeatherService {
  static get(): Promise<WeatherData | void> {
    return axios
      .get<OpenWeatherResponse>(
        'https://api.openweathermap.org/data/2.5/onecall',
        {
          params: {
            lat: 33.985,
            lon: -118.4695,
            appid: '231d3f47e06da3b902e23355b102906c',
            units: 'imperial',
          },
        },
      )
      .then(({data}) => {
        let result: WeatherData = {
          current: {
            temp: data.current.temp,
            summary: data.current.weather[0].main,
            feelsLike: data.current.feels_like,
            windDeg: data.current.wind_deg,
            windSpeed: data.current.wind_speed,
          },
          daily: data.daily.map((day) => ({
            dt: day.dt,
            minTemp: day.temp.min,
            maxTemp: day.temp.max,
            summary: day.weather[0].main,
          })),
        };
        return result;
      })
      .catch((err) => console.log(err));
  }
}

export {WeatherService as default};
