import 'react-native';
import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

import Forecast from '../../src/components/Forecast';
import WeatherContext from '../../src/contexts/WeatherContex';

describe('ForecastRow', () => {
  let component: ReactWrapper;
  let mockWeatherContextProvider = {
    data: {
      current: {
        temp: 86,
        summary: 'Clouds',
        feelsLike: 85,
        windDeg: 100,
        windSpeed: 10.4,
      },
      daily: [{dt: 1587409200, minTemp: 65, maxTemp: 74, summary: 'Sunny'}],
    },
    loading: false,
  };

  beforeEach(() => {
    component = mount(
      <WeatherContext.Provider value={mockWeatherContextProvider}>
        <Forecast />
      </WeatherContext.Provider>,
    );
  });

  it('displays the ForecastRow components', () => {
    expect(component.find('ForecastRow').length).toEqual(2);
  });
});
