import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const BASE_URL: string = "http://api.openweathermap.org/";
const forcastURL: string = "data/2.5/forecast";
const API_KEY: string = "4b8aae7fd40c0a3b71185f8ba3955ae0";

@Injectable()
export class WeatherForcastService {
  constructor(private http: HttpClient) {}
  
  // Uses http.get() to load get city forcast data from a openweather API endpoint
  getWeatherForcast(cityName) {
    return this.http.get(
      `${BASE_URL}${forcastURL}?q=${cityName}&appid=${API_KEY}`
    );
  }
}
