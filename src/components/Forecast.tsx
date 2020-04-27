import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import WeatherContext from '../contexts/WeatherContex';
import ForecastRow from './ForecastRow';

const Forecast: React.FC = () => {
  const {
    data: {daily},
  } = useContext(WeatherContext);

  const renderDays = () =>
    daily?.map(({dt, summary, minTemp, maxTemp}) => (
      <View key={dt}>
        <ForecastRow dt={dt} summary={summary} temp={minTemp} meridian={'AM'} />
        <ForecastRow dt={dt} summary={summary} temp={maxTemp} meridian={'PM'} />
      </View>
    ));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forecast:</Text>
      {renderDays()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 64,
  },
  header: {
    marginBottom: 32,
  },
});

export default Forecast;
