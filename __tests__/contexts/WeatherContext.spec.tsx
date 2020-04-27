import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import WeatherContext, {
  WeatherProvider,
} from '../../src/contexts/WeatherContex';
import WeatherService from '../../src/services/WeatherService';

describe('WeatherContext', () => {
  let context: WeatherContext;

  beforeEach(() => {
    jest.spyOn(WeatherService, 'get');
    renderer.create(
      <WeatherProvider>
        <WeatherContext.Consumer>
          {(props) => {
            context = props as WeatherContext;
            return null;
          }}
        </WeatherContext.Consumer>
      </WeatherProvider>,
    );
  });

  it('sets the initial state', () => {
    expect(context.loading).toEqual(true);
    expect(context.data).toEqual({});
  });

  it('calls WeatherService#get method', () => {
    expect(WeatherService.get).toHaveBeenCalled();
  });
});
