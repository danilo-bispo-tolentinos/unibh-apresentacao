import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private api_endpoint = environment.api_endpoint;
    constructor(private http: HttpClient) { }

    // Criar conta
    public createUser(data): Observable<any> {
        return this.http.post(this.api_endpoint + 'users/createUser/', data);
    }

    // Acessar
    public access(data): Observable<any> {
        return this.http.post(this.api_endpoint + 'auth/login', data);
    }

    public teste(): Observable<any> {
        return this.http.get('http://localhost:8000/api/plans');
    }
}
