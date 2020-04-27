import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  summary: string;
  temp: number;
  meridian: string;
  dt: number;
}

const ForecastRow: React.FC<Props> = ({summary, temp, meridian, dt}) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <View style={styles.row}>
      <Text testID="day-of-week" style={styles.mediumColumn}>
        {days[new Date(dt * 1000).getDay()]}
      </Text>
      <Text style={styles.smallColumn}>{meridian}</Text>
      <Text style={styles.smallColumn}>{summary}</Text>
      <Text style={styles.smallColumn}>{temp.toFixed()}&deg;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mediumColumn: {width: '30%'},
  smallColumn: {width: '15%'},
});

export default ForecastRow;
