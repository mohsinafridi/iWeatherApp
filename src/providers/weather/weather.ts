import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
    
    url;
    apiKey:"eae3b423b320f9cf";

//http://api.wunderground.com/api/eae3b423b320f9cf/conditions/q/FL/Miami.json
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url= 'http://api.wunderground.com/api/eae3b423b320f9cf/conditions/q/';
  }

   getWeather(city,state){
       return this.http.get(this.url+'/' + state + '/' +  city +'.json')
  .map(res=>res.json());

  }

}
