import { WeatherConfig } from './interfaces and enums/weather-config';

export const appConfig: WeatherConfig = {
  unit: 'metric',
  city: 'Tel Aviv',
};

export const apiConfig = {
  host: 'https://api.openweathermap.org/data/2.5/',
  appId: '0f3fb9fa31ad3d41f1bb2bd0841c3f2f',
  measurementUnits: {
    metric: {
      temperature: 'C',
      windSpeed: 'm/s',
      pressure: 'mmHg',
    },
    imperial: {
      temperature: 'F',
      windSpeed: 'mil/h',
      pressure: 'hPa',
    },
  },
  amountForecastDays: 8,
  updateInterval: 300000,
};
