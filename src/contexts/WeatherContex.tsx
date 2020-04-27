import React, {createContext, useEffect, useState} from 'react';
import WeatherService from '../services/WeatherService';
import {WeatherData} from '../models/WeatherData';

interface WeatherContext {
  data: WeatherData;
  loading: boolean;
}

const WeatherContext = createContext<WeatherContext>({} as WeatherContext);

const WeatherProvider: React.FC = ({children}) => {
  const [data, setData] = useState<WeatherData>({} as WeatherData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    WeatherService.get().then((newData) => {
      if (!newData) {
        return;
      }
      setData(newData);
      setLoading(false);
    });
  }, []);

  const value = {data, loading};

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export {WeatherContext as default, WeatherProvider};
