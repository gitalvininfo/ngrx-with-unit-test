import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseURL = "https://swapi.dev/api";

  constructor(private http: HttpClient) { }


  loadEntities() {
    return this.http.get(`${this.baseURL}/planets`);
  }

}
