import { Brands } from './brands.model';
import { Type } from './type.model';

export class Products {
    id: number;
    //fkBrand: Brands;
    fkBrand: number
    name: String;
    fkType: number; //Type;
    description: String;
    imageProduct: String;
    background: String;

    constructor() {
        this.id = 0;
        this.fkBrand = 0;  //new Brands();
        this.name = '';
        this.fkType = 0; //new Type();
        this.description = '';
        this.imageProduct = '';
        this.background = '';
    }

}
