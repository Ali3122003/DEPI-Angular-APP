import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  private API_URL = 'http://192.168.1.6:30000'

  getMessage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.API_URL}`);
  }
}
