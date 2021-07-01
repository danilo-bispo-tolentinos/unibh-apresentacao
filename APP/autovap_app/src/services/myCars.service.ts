import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class MyCarsService {

    private api_endpoint = environment.api_endpoint;
    module = 'vehiclesusers/';
    constructor(private http: HttpClient) { }

    public getAll(id): Observable<any> {
        return this.http.get(this.api_endpoint + this.module + 'byId/' + id);
    }

    public create(data): Observable<any> {
        return this.http.post(this.api_endpoint + this.module + 'create/', data);
    }
}
