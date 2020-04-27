import 'react-native';
import React from 'react';

import ForecastRow from '../../src/components/ForecastRow';
import {mount, ReactWrapper} from 'enzyme';

describe('ForecastRow', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <ForecastRow
        summary={'Rainy'}
        temp={34}
        meridian={'AM'}
        dt={1587409200}
      />,
    );
  });

  it('displays the correct day of the week', () => {
    expect(component.find("[testID='day-of-week']").first().text()).toEqual(
      'Monday',
    );
  });
});
