import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {

  id;
  product;
  qtdValue = 0;
  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService,
    public toastController: ToastController
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.findProduct();
      }
    });
  }

  findProduct() {
    this.productService.getById(this.id).subscribe(r => {
      console.log(r);
      this.product = r;
    }, err => {
      console.log(err);
    });
  }
  clickCountPlus(): void {
    if (this.qtdValue < this.product.qtd) {
      this.qtdValue++;
    } else {
      this.presentToast();
    }
  }
  clickCountMinus(): void {
    if (this.qtdValue > 0) {
      this.qtdValue--;
    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Limite de quantidade atingidos',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  submit() {
    
  }
  ngOnInit() {

  }

}
