import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-weatcher-forcast-list",
  templateUrl: "./weatcher-forcast-list.component.html",
  styleUrls: ["./weatcher-forcast-list.component.css"]
})
export class WeatcherForcastListComponent implements OnInit {
  constructor() {}

  @Input() forcastItemArrayResponse: any;
  @Output() forecastItemElement = new EventEmitter<any>();

  ngOnInit() {}

  //MomentJS date format as per relative time from now
  formatDateToRelative = (date: number) => {
    return moment.unix(date).fromNow();
  };


  //MomentJS method to to format date in human readable format
  formatDateToAccurate = (date: number) => {
    return moment.unix(date).format("LLLL");
  };

  //forcast item click handle
  onItemClick = (item) => {
    this.forecastItemElement.emit(item);
  }
}
