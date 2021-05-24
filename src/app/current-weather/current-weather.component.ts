import {Component, OnInit} from '@angular/core';
import {ICurrentWeather} from '../interfaces';
import {WeatherService} from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
    this.weatherService.getCurrentWeather('Bangalore', 'INDIA')
      .subscribe((data) => this.current = data);
  }

  ngOnInit(): void {
  }

}
