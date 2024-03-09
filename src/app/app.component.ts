import { Component, OnInit } from '@angular/core';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { CurrentCityTemperatureComponent } from './current-city-temperature/current-city-temperature.component';
import { SevenDayForecastComponent } from './seven-day-forecast/seven-day-forecast.component';
import { WetherService } from './services/weater.service';
import {
  Observable,
  forkJoin,
  interval,
  map,
  mergeMap,
  repeat,
  startWith,
  switchMap,
  timeInterval,
} from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AppService } from './services/app.service';
import { IWeather } from './interfaces/IWeather';
import { MatDividerModule } from '@angular/material/divider';
import { apiConfig } from './config';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CitySelectorComponent,
    CurrentCityTemperatureComponent,
    SevenDayForecastComponent,
    MatDividerModule,
    AsyncPipe,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  weather$!: Observable<IWeather>;
  city!: string;
  title = 'weather-app';
  backgroundImg!: string;

  constructor(
    private wetherService: WetherService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.getWeather();
  }

  changeCity(city: string) {
    this.city = city;
    this.appService.setCurrentCity(city);
    this.getWeather();
  }

  getWeather() {
    this.weather$ = interval(3 * 60 * 1000).pipe(
      startWith(0),
      switchMap(() =>
        forkJoin([
          this.wetherService.getCurrentCityWeather(),
          this.wetherService.getSevenDaysForecastWeather(),
        ]).pipe(
          map(([currentCityWeather, forecastWeather]) => ({
            currentCityWeather,
            forecastWeather,
          }))
        )
      )
    );
  }
}
