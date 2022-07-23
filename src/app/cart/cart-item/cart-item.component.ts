import { Component, Input, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/models/ICartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: ICartItem;
  constructor() { }

  ngOnInit(): void {
  }

}
