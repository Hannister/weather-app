import { Component, Input, OnInit } from '@angular/core';
import { IWeatherForecastList } from '../../interfaces/IWeatherForecast';
import { CommonModule } from '@angular/common';
import { MinMaxTemperatureComponent } from '../../shared/min-max-temperature/min-max-temperature.component';

@Component({
  selector: 'day-card-forecast',
  standalone: true,
  imports: [CommonModule, MinMaxTemperatureComponent],
  templateUrl: './day-card-forecast.component.html',
  styleUrl: './day-card-forecast.component.scss',
})
export class DayCardForecastComponent implements OnInit {
  @Input() day!: IWeatherForecastList;
  icon!: string;

  ngOnInit(): void {
    this.icon = `../../../assets/icons/${this.day.weather[0].icon}.png`;
  }
}
