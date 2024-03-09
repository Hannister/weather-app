import { Component, Input, OnInit } from '@angular/core';
import { ICurrentCityWeather } from '../interfaces/ICurrentCity';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { MinMaxTemperatureComponent } from '../shared/min-max-temperature/min-max-temperature.component';

@Component({
  selector: 'current-city-temperature',
  standalone: true,
  imports: [JsonPipe, DatePipe, CommonModule, MinMaxTemperatureComponent],
  templateUrl: './current-city-temperature.component.html',
  styleUrl: './current-city-temperature.component.scss',
})
export class CurrentCityTemperatureComponent implements OnInit {
  @Input() weather!: ICurrentCityWeather;
  icon!: string;

  ngOnInit(): void {
    this.icon = `../../../assets/icons/${this.weather.weather[0].icon}.png`;
  }
}
