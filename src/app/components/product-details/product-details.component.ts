import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BProduct} from "../../models/products";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product: BProduct;
  productSubscription: Subscription;
constructor(private route: ActivatedRoute) {
}

ngOnInit():void {
  this.productSubscription = this.route.data.subscribe((data) => {
    this.product = data['data'];
  })
}
}
