import 'react-native';
import React from 'react';
import {ReactWrapper, mount} from 'enzyme';

import CurrentWeather from '../../src/components/CurrentWeather';
import WeatherContext from '../../src/contexts/WeatherContex';

describe('CurrentWeather', () => {
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
      daily: [],
    },
    loading: false,
  };

  beforeEach(() => {
    component = mount(
      <WeatherContext.Provider value={mockWeatherContextProvider}>
        <CurrentWeather />
      </WeatherContext.Provider>,
    );
  });

  it('displays the curent temperature', () => {
    expect(component.find("[testID='current-temp']")).toExist();
    expect(component.find("[testID='current-temp']").first().text()).toEqual(
      '86°',
    );
  });
});
