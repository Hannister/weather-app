import { apiConfig, appConfig } from './../config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { AppService } from './app.service';
import { ICurrentCityWeather } from '../interfaces/ICurrentCity';
import { IWeatherForecast } from '../interfaces/IWeatherForecast';

@Injectable({
  providedIn: 'root',
})
export class WetherService {
  constructor(private http: HttpClient, private appService: AppService) {}

  getCurrentCityWeather() {
    return this.http
      .get<ICurrentCityWeather>(
        `${apiConfig.host}weather?q=${this.appService.getCurrentCity()}&units=${
          appConfig.defaultUnit
        }&appid=${apiConfig.appId}`
      )
      .pipe(
        catchError((err) => {
          localStorage.removeItem('city');
          throw err;
        })
      );
  }
  getSevenDaysForecastWeather() {
    return this.http
      .get<IWeatherForecast>(
        `${
          apiConfig.host
        }forecast/daily?q=${this.appService.getCurrentCity()}&appid=${
          apiConfig.appId
        }&units=metric&cnt=${apiConfig.amountForecastDays}`
      )
      .pipe(
        catchError((err) => {
          localStorage.removeItem('city');
          throw err;
        })
      );
  }
}
