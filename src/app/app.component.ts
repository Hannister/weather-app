import { Component, OnInit } from '@angular/core';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { CurrentCityTemperatureComponent } from './current-city-temperature/current-city-temperature.component';
import { SevenDayForecastComponent } from './seven-day-forecast/seven-day-forecast.component';
import { WetherService } from './services/weater.service';
import { Observable, catchError, combineLatest, forkJoin, map, of } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AppService } from './services/app.service';
import { IWeather } from './interfaces/IWeather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CitySelectorComponent,
    CurrentCityTemperatureComponent,
    SevenDayForecastComponent,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  weather$!: Observable<IWeather>;
  city!: string;
  title = 'weather-app';

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
    this.weather$ = forkJoin([
      this.wetherService.getCurrentCityWeather(),
      this.wetherService.getForecastWeather(),
    ]).pipe(
      map(([currentCityWeather, forecastWeather]) => ({
        currentCityWeather,
        forecastWeather,
      }))
    );
  }
}
