import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesCleanService {

  apiLink = environment.api_endpoint;
  module = 'servicesclean';
  constructor(private http: HttpClient) { }

  loadAllServices() {
    return this.http.get<any>(this.apiLink + this.module + '/all');
  }

  createService(data) {
    return this.http.put<any>(this.apiLink + this.module + '/createServicesClean', data);
  }

  updateService(data) {
    return this.http.put<any>(this.apiLink + this.module + '/updateServicesClean', data);
  }

  blockService(data) {
    return this.http.put<any>(this.apiLink + this.module + '/blockServicesClean', data);
  }
}
