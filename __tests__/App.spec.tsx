import 'react-native';
import React from 'react';
import App from '../src/App';
import {ShallowWrapper, shallow} from 'enzyme';

describe('App', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders the CurrentWeather component', () => {
    expect(component.find('CurrentWeather')).toExist();
  });

  it('renders the Forecast component', () => {
    expect(component.find('Forecast')).toExist();
  });
});
