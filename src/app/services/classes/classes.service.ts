import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseResponse } from 'src/app/interfaces/courseResponse';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private _http: HttpClient) { }

  private getHeadersOptions(): HttpHeaders
  {
    return new HttpHeaders({'content-type' : 'application/json', 'Access-Control-Allow-Origin': '*'})
  }

  getAll(): Observable<CourseResponse>
  {
    return this._http.get<CourseResponse>('https://scandalous-silver-moon.glitch.me/', {headers: this.getHeadersOptions()})
  }

  
}
