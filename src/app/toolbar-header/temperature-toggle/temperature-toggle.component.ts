import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'temperature-toggle',
  standalone: true,
  imports: [],
  templateUrl: './temperature-toggle.component.html',
  styleUrl: './temperature-toggle.component.scss',
})
export class TemperatureToggleComponent implements OnInit {
  isCelsius: boolean = true;
  constructor(private appService: AppService) {}

  ngOnInit() {
    const userPref = localStorage.getItem('temperatureUnit');
    if (userPref) {
      this.isCelsius = userPref === 'metric';
    }
  }

  toggleTemperatureUnit() {
    this.isCelsius = !this.isCelsius;
    const temperatureUnit = this.isCelsius ? 'metric' : 'imperial';
    this.appService.changeTemperatureUnit(temperatureUnit);
  }
}
