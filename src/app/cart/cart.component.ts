import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICartItem } from '../models/ICartItem';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartTotal: number = 0;
  cartItems: ICartItem[] = [];
  constructor(private msg: CartService) { }



  ngOnInit(): void {
    this.cartItems = this.msg.getMsg();
    this.cartItems.forEach(item => {
      this.cartTotal! += (item.price! * item.amount!);
    });
  }



}
