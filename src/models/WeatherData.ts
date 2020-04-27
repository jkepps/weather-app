export interface WeatherData {
  current: {
    summary: string;
    temp: number;
    feelsLike: number;
    windDeg: number;
    windSpeed: number;
  };
  daily: Array<{dt: number; minTemp: number; maxTemp: number; summary: string}>;
}
