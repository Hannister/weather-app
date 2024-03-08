import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { IWeatherForecast } from '../interfaces/IWeatherForecast';

@Component({
  selector: 'seven-day-forecast',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './seven-day-forecast.component.html',
  styleUrl: './seven-day-forecast.component.scss',
})
export class SevenDayForecastComponent {
  @Input() weatherForecast!: IWeatherForecast;
}
