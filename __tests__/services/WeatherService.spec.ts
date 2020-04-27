import axios from 'axios';

import WeatherService from '../../src/services/WeatherService';

describe('WeatherService', () => {
  describe('#get', () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    let response: any;
    let body = {
      current: {
        dt: 1586001851,
        temp: 280.15,
        feels_like: 277.75,
        wind_speed: 2.1,
        wind_deg: 70,
        weather: [
          {id: 501, main: 'Rain', description: 'moderate rain', icon: '10n'},
        ],
      },
      daily: [
        {
          dt: 1586023200,
          temp: {min: 279.92, max: 285.17},
          weather: [
            {id: 501, main: 'Rain', description: 'moderate rain', icon: '10d'},
          ],
        },
      ],
    };

    beforeEach(() => {
      axiosGetSpy.mockResolvedValue({data: body});
      response = WeatherService.get();
    });

    it('makes a get request', () => {
      expect(axiosGetSpy).toHaveBeenCalledWith(
        'https://api.openweathermap.org/data/2.5/onecall',
        {
          params: {
            lat: 33.985,
            lon: -118.4695,
            appid: '231d3f47e06da3b902e23355b102906c',
            units: 'imperial',
          },
        },
      );
    });

    it('returns a promise with structured data', (done) => {
      response.then((data: any) => {
        expect(data).toEqual({
          current: {
            feelsLike: 277.75,
            summary: 'Rain',
            temp: 280.15,
            windDeg: 70,
            windSpeed: 2.1,
          },
          daily: [
            {dt: 1586023200, maxTemp: 285.17, minTemp: 279.92, summary: 'Rain'},
          ],
        });
        setImmediate(done);
      });
    });
  });
});
