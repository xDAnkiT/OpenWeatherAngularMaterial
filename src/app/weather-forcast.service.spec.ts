import { TestBed, inject } from '@angular/core/testing';

import { WeatherForcastService } from './weather-forcast.service';

describe('WeatherForcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherForcastService]
    });
  });

  it('should be created', inject([WeatherForcastService], (service: WeatherForcastService) => {
    expect(service).toBeTruthy();
  }));
});
