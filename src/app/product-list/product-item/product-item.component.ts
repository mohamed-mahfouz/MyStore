import { Component, Input, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/models/ICartItem';
import { IProduct } from 'src/app/models/Iproduct';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: IProduct;
  selectedAmount: number = 1;
  amount: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {

  }

  addToCart() {
    let cartItem: ICartItem = {
      price: this.product.price,
      amount: this.selectedAmount,
      name: this.product.name,
      url: this.product.url
    };

    this.cartService.sendMsg(cartItem);
    alert('Added to cart!');
  }

}
