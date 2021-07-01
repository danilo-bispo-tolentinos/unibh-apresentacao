import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class FipeApiService {

    private apifipe = 'http://fipeapi.appspot.com/api/1/';
    private tessste = 'http://localhost:1337';
    constructor(private http: HttpClient) { }

    // Marcas - Carros
    public getBrandsCars(): Observable<any> {
        return this.http.get(this.apifipe + 'carros/marcas.json');
    }
    // Marcas - Motos
    public getBrandsMotorcyclesFipe(): Observable<any> {
        return this.http.get(this.apifipe + 'motos/marcas.json');
    }
    // Nomes - Carros
    public getNameCars(idBrand): Observable<any> {
        return this.http.get(this.apifipe + 'carros/veiculos/' + idBrand + '.json');
    }
    // Nomes - Motos
    public getNameMotos(idBrand): Observable<any> {
        return this.http.get(this.apifipe + 'motos/veiculos/' + idBrand + '.json');
    }
}