import { apiConfig } from './../config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { AppService } from './app.service';
import { ICurrentCityWeather } from '../interfaces and enums/ICurrentCity';
import { IWeatherForecast } from '../interfaces and enums/IWeatherForecast';
import { WeatherConfig } from '../interfaces and enums/weather-config';

@Injectable({
  providedIn: 'root',
})
export class WetherService {
  constructor(private http: HttpClient, private appService: AppService) {}

  getCurrentCityWeather(data: WeatherConfig) {
    return this.http
      .get<ICurrentCityWeather>(
        `${apiConfig.host}weather?q=${data.city}&units=${data.unit}&appid=${apiConfig.appId}`
      )
      .pipe(
        catchError((err) => {
          localStorage.removeItem('city');
          throw err;
        })
      );
  }
  getSevenDaysForecastWeather(data: WeatherConfig) {
    return this.http
      .get<IWeatherForecast>(
        `${apiConfig.host}forecast/daily?q=${data.city}&appid=${apiConfig.appId}&units=${data.unit}&cnt=${apiConfig.amountForecastDays}`
      )
      .pipe(
        catchError((err) => {
          localStorage.removeItem('city');
          throw err;
        })
      );
  }
}
