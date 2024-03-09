import { Component, Input, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  IWeatherForecast,
  IWeatherForecastList,
} from '../interfaces/IWeatherForecast';
import { DayCardForecastComponent } from './day-card-forecast/day-card-forecast.component';

@Component({
  selector: 'seven-day-forecast',
  standalone: true,
  templateUrl: './seven-day-forecast.component.html',
  styleUrl: './seven-day-forecast.component.scss',
  imports: [JsonPipe, DayCardForecastComponent],
})
export class SevenDayForecastComponent {
  private _weatherForecast!: IWeatherForecastList[];

  get weatherForecast(): IWeatherForecastList[] {
    return this._weatherForecast;
  }
  @Input() set weatherForecast(weather: IWeatherForecast) {
    if (weather) {
      weather.list.shift();
      this._weatherForecast = weather.list;
    }
  }
}
