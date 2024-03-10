export interface ICurrentCity {
  coord?: {
    latitude: number;
    longitude: number;
  };
  name: string;
}
export interface ICurrentCityWeather extends ICurrentCity {
  weather: IWeatherDescription[];
  base: 'stations';
  main: IWeatherTemp;
  visibility: number;
  wind: IWeatherWind;
  clouds: IWeatherClouds;
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  cod: number;
}

export interface IWeatherDescription {
  id: string;
  main: string;
  description: string;
  icon: string;
}
export interface IWeatherTemp {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface IWeatherWind {
  speed: number;
  deg: number;
}
export interface IWeatherClouds {
  all: number;
}
