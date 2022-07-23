import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICartItem } from '../models/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // subject = new Subject<ICartItem>();
  cartItems: ICartItem[] = [];
  constructor() { }

  sendMsg(cartItem: ICartItem) {
    this.cartItems.push(cartItem);
  }

  getMsg() {
    return this.cartItems;
  }
}
