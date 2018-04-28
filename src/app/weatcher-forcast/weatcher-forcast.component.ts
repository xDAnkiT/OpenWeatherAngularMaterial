import { Component, OnInit, Input } from "@angular/core";
import { WeatherForcastService } from "../weather-forcast.service";
import * as moment from "moment";

@Component({
  selector: "app-weatcher-forcast",
  templateUrl: "./weatcher-forcast.component.html",
  styleUrls: ["./weatcher-forcast.component.css"]
})
export class WeatcherForcastComponent implements OnInit {
  forcastItemArray: any = [];
  firstArray: any = [];
  forecastCity: string = "";
  @Input() forcastResponse: any;
  @Input() forcastCity: string;
  @Input() forecastItemElement: any;

  constructor(private _weatherForcastService: WeatherForcastService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (Object.keys(this.forcastResponse).length) {
      if (this.forcastResponse.list != null) {
        this.forcastItemArray = [];
        this.firstArray = [];
        this.forcastItemArray = this.forcastResponse.list;
        this.firstArray.push(this.forcastItemArray[0]);
        this.forcastCity = this.forcastCity;
      } else {
        this.forcastItemArray = [];
        this.firstArray = [];
      }
    } else {
      //Search query has not been initiated
    }
  }

  //MomentJS method to to format date in human readable format
  formatDateToAccurate = (date: number) => {
    return moment.unix(date).format("LLLL");
  };

  //onItem click to show details on card at parent component
  forcastItemClick = item => {
    this.firstArray = [];
    this.firstArray.push(item);
  };
}
