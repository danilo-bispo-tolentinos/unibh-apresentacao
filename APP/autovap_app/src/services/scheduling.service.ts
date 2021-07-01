import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SchedullingService {

    apiLink = environment.api_endpoint;
    module = 'scheduling';
    constructor(private http: HttpClient) { }

    loadAllSchedulling(id) {
        return this.http.get<any>(this.apiLink + this.module + '/byId/' + id);
    }

    create(data) {
        console.log(data)
        return this.http.post<any>(this.apiLink + this.module + '/create', data);
    }
}
