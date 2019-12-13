import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private url ="http://localhost:8080/ta/gethotelsbasedoncity?place="
  constructor(private http: HttpClient) { }

  getHotels(city:any): Observable<any[]> {
    return this.http.get<any>(
      this.url + city
    );

  }
}
