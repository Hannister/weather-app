import { Injectable } from '@angular/core';
import { apiConfig, appConfig } from '../config';
import { BehaviorSubject } from 'rxjs';
import { WeatherConfig } from '../interfaces and enums/weather-config';
import { WeatherDetails } from '../interfaces and enums/measurement-units.enum';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentCity!: string;
  weatherDetails = new BehaviorSubject<WeatherConfig>({
    city: this.getCurrentCity(),
    unit: this.getTemperatureUnit(),
  });

  constructor() {}

  changeCurrentCity(city: string) {
    const unit = this.weatherDetails.value.unit;
    localStorage.setItem(WeatherDetails.city, city);
    this.weatherDetails.next({ city, unit });
  }
  changeTemperatureUnit(unit: string) {
    localStorage.setItem(WeatherDetails.temperatureUnit, unit);
    const city = this.weatherDetails.value.city;
    this.weatherDetails.next({ city, unit });
  }

  getCurrentCity() {
    const city = localStorage.getItem(WeatherDetails.city)?.toString();
    return city ? city : appConfig.city;
  }

  getTemperatureUnit() {
    const temperatureUnit = localStorage
      .getItem(WeatherDetails.temperatureUnit)
      ?.toString();
    return temperatureUnit ? temperatureUnit : appConfig.unit;
  }

  getWindSpeedUnit() {
    if (this.weatherDetails.value.unit === WeatherDetails.metric) {
      return apiConfig.measurementUnits.metric.windSpeed;
    }
    return apiConfig.measurementUnits.imperial.windSpeed;
  }
}
