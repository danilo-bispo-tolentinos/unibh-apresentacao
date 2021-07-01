import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {

  listProducts;
  constructor(
    public productsService: ProductsService
  ) {
    this.productsService.getAll().subscribe(r => {
      this.listProducts = r;
    }, err => { });
  }

  ngOnInit() { }

}
