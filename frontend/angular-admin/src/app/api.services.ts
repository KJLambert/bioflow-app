import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  queryFeatures(payload: any) {
    return this.http.post<any>('http://localhost:3000/api/query', payload);
  }
}
