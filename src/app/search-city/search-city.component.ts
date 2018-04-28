import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-search-city",
  templateUrl: "./search-city.component.html",
  styleUrls: ["./search-city.component.css"]
})
export class SearchCityComponent implements OnInit {
  searchCity: any;

  @Output() searchQueryEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  //OnClick method to search city forecast
  onCitySearch() {
    this.searchQueryEvent.emit(this.searchCity);
  }
}
