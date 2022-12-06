import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WData } from '../interfaces/w-data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private BASE_URL = environment.wApiUrl;
  constructor(private http: HttpClient) { }

  getWeatherData(city:string): Observable<WData> {
    return this.http.get<WData>(this.BASE_URL,{headers: new HttpHeaders().set(
      environment.lblXRapidAPIHost,environment.valXRapidAPIHost).set(
        environment.lblXRapidAPIKey,environment.valXRapidAPIKey
        ),params: new HttpParams().set('q',city,).set('units','metric').set('mode','json')
      });
  }


}
