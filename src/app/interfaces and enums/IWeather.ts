import { Observable } from 'rxjs';
import { ICurrentCityWeather } from './ICurrentCity';
import { IWeatherForecast } from './IWeatherForecast';

export interface IWeather {
  currentCityWeather: ICurrentCityWeather;
  forecastWeather: IWeatherForecast;
}
