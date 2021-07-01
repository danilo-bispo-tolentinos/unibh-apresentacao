import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiLink = environment.api_endpoint;
  module = 'payment';
  constructor(private http: HttpClient) { }

  loadAll() {
    return this.http.get<any>(this.apiLink + this.module + '/all');
  }
}
