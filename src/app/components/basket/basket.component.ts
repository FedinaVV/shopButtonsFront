import {Component} from '@angular/core';
import {BProduct} from "../../models/products";
import {ProductsService} from "../../services/products.service";
import {Basket} from "../../models/basket";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  baskets: Basket[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProductsFromBasket().subscribe({
      next: buttonsWithConfig => {
        this.baskets = buttonsWithConfig;
        console.log(this.baskets)
      },
      error: err => alert('Не удалось получить данные с корзины!')
    })
  }

  deleteItemFromBasket(basketId: number) {
    this.productsService.deleteProductFromBasket(basketId).subscribe(
      () => this.baskets.find((item) => {
      if (basketId === item.basketId) {
        let idx = this.baskets.findIndex((data) => data.basketId === basketId);
        this.baskets.splice(idx, 1);
      }
    })
    );
  }
}
