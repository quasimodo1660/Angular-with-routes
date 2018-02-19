import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }
  getWeather(name){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+name+'&APPID=8bf3aaf448e870c11c25ccf5342ba8d0')
  }
}