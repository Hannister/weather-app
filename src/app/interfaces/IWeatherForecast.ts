import { ICurrentCity, IWeatherDescription } from './ICurrentCity';

export interface IWeatherForecast {
  city: IWeatherForecast;
  cod: number;
  message: number;
  cnt: number;
  list: IWeatherForecastList[];
}

export interface IWeatherForecast extends ICurrentCity {
  id: number;
  country: string;
  population: number;
  timezone: number;
}
export interface IWeatherForecastTemp {
  day: number;
  min?: number;
  max?: number;
  night: number;
  eve: number;
  morn: number;
}
export interface IWeatherForecastList {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: IWeatherForecastTemp;
  feels_like: IWeatherForecastTemp;
  pressure: number;
  humidity: number;
  weather: IWeatherDescription[];
  speed: number;
  deg: number;
  gust: number;
  clouds: number;
  pop: number;
}
