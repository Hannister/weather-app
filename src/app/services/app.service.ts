import { Injectable } from '@angular/core';
import { appConfig } from '../config';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentCity!: string;

  constructor() {}

  setCurrentCity(city: string) {
    this.currentCity = city;
    localStorage.setItem('city', city);
  }

  getCurrentCity() {
    if (!this.currentCity) {
      const city = localStorage.getItem('city')?.toString();
      return (this.currentCity = city ? city : appConfig.defaultCity);
    }
    return this.currentCity;
  }
}
