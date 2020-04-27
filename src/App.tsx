import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {WeatherProvider} from './contexts/WeatherContex';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <WeatherProvider>
          <CurrentWeather />
          <Forecast />
        </WeatherProvider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
  },
});

export default App;
