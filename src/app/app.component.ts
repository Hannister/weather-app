import { Component, OnDestroy, OnInit } from '@angular/core';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { CurrentCityTemperatureComponent } from './current-city-temperature/current-city-temperature.component';
import { SevenDayForecastComponent } from './seven-day-forecast/seven-day-forecast.component';
import { WetherService } from './services/weater.service';
import {
  Observable,
  Subscription,
  forkJoin,
  interval,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AppService } from './services/app.service';
import { IWeather } from './interfaces and enums/IWeather';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { WeatherConfig } from './interfaces and enums/weather-config';

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
    MatProgressSpinnerModule,
    ToolbarHeaderComponent,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  weather$!: Observable<IWeather>;
  city!: string;
  title = 'weather-app';
  backgroundImg = 'unknown';
  private weatherDetailsSubscription!: Subscription;

  constructor(
    private wetherService: WetherService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.weatherDetailsSubscription = this.appService.weatherDetails.subscribe({
      next: (data) => {
        this.getWeather(data);
      },
    });
  }

  changeCity(city: string) {
    this.city = city;
    this.appService.changeCurrentCity(city);
  }

  getWeather(data: WeatherConfig) {
    this.weather$ = interval(10 * 60 * 1000).pipe(
      startWith(0),
      switchMap(() =>
        forkJoin([
          this.wetherService.getCurrentCityWeather(data),
          this.wetherService.getSevenDaysForecastWeather(data),
        ]).pipe(
          tap((data) => {
            this.backgroundImg = data[0].weather[0].icon;
          }),
          map(([currentCityWeather, forecastWeather]) => ({
            currentCityWeather,
            forecastWeather,
          }))
        )
      )
    );
  }

  ngOnDestroy(): void {
    this.weatherDetailsSubscription?.unsubscribe();
  }
}
