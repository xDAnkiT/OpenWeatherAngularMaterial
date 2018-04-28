import { Component, OnInit } from "@angular/core";
import { WeatherForcastService } from "./weather-forcast.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  searchQuery: string;
  forcastResponse: any = {};
  forcastCity: string = "";
  forcastResponseArray: any = [];

  constructor(public _weatherForcastService: WeatherForcastService) {}

  ngOnInit() {}

  //Service call associated with API call
  searchForcast = $event => {
    this._weatherForcastService.getWeatherForcast($event).subscribe(
      data => {
        this.forcastResponse = data;
        if (this.forcastResponse) {
          if (this.forcastResponse.list != null)
            this.forcastResponseArray = this.forcastResponse.list;
          this.forcastCity = this.forcastResponse.city.name;
        }
      },
      err => {
        //This is a error block
      }
    );
  };
}
