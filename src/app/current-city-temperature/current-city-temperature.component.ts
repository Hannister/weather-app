import { Component, Input } from '@angular/core';
import { ICurrentCityWeather } from '../interfaces/ICurrentCity';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'current-city-temperature',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './current-city-temperature.component.html',
  styleUrl: './current-city-temperature.component.scss',
})
export class CurrentCityTemperatureComponent {
  @Input() weather!: ICurrentCityWeather;
}
