import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICartItem } from '../models/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: ICartItem[] = [];
  constructor() { }

  sendMsg(cartItem: ICartItem) {

    if (!this.isItemExists(cartItem))
      this.cartItems.push(cartItem);
  }

  getMsg() {
    return this.cartItems;
  }

  private isItemExists(cartItem: ICartItem) {
    let isExists = false;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].name === cartItem.name) {
        this.cartItems[i].amount = cartItem.amount;
        isExists = true;
        break;
      }
    }

    return isExists;
  }
}
