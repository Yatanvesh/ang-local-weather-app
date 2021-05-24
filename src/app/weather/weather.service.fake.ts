import {ICurrentWeather} from '../interfaces';
import {IWeatherService} from './weather.service';
import {Observable, of} from 'rxjs';

export const fakeWeather: ICurrentWeather = {
  city: 'Bethesda',
  country: 'US',
  date: 1482288222,
  image: '',
  temperature: 280,
  description: 'light intensity cum'
};

export class WeatherServiceFake implements IWeatherService {
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather);
  }
}
