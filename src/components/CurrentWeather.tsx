import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import WeatherContext from '../contexts/WeatherContex';

const CurrentWeather: React.FC = () => {
  const {
    data: {current},
    loading,
  } = useContext(WeatherContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>Venice</Text>
        <Text style={styles.summary}>{loading ? '--' : current.summary}</Text>
        <Text testID="current-temp" style={styles.currentTemp}>
          {loading ? '--' : current.temp.toFixed()}&deg;
        </Text>
      </View>
      <View style={styles.content}>
        <View>
          <Text>Feels Like</Text>
          <Text>Wind</Text>
        </View>
        <View style={styles.data}>
          <Text>{loading ? '--' : current.feelsLike.toFixed()}&deg;</Text>
          <Text>
            {loading ? '--' : current.windDeg}&deg; /{' '}
            {loading ? '--' : current.windSpeed.toFixed(1)} mph
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 96,
    marginBottom: 32,
  },
  header: {
    marginBottom: 32,
  },
  city: {
    fontSize: 40,
    textAlign: 'center',
  },
  summary: {
    fontSize: 16,
    textAlign: 'center',
  },
  currentTemp: {
    fontSize: 48,
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  data: {
    marginLeft: 64,
  },
});

export default CurrentWeather;
