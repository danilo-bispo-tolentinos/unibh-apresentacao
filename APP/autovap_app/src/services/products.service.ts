import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private api_endpoint = environment.api_endpoint;
    constructor(private http: HttpClient) { }

    public getAll(): Observable<any> {
        return this.http.get(this.api_endpoint + 'products');
    }
}
