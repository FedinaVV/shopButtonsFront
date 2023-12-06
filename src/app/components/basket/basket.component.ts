import {Component} from '@angular/core';
import {BProduct} from "../../models/products";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  products: BProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProductsFromBasket().subscribe({
      next: buttonsWithConfig => this.products = buttonsWithConfig,
      error: err => alert('Не удалось получить данные с корзины!')
    })
  }

  deleteItemFromBasket(id: number) {
    this.productsService.deleteProductFromBasket(id).subscribe(() => this.products.find((item) => {
      if (id === item.id) {
        let idx = this.products.findIndex((data) => data.id === id);
        this.products.splice(idx, 1);
      }
    }));
  }
}
