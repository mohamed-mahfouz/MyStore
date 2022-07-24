import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-list/product-item-detail/product-item-detail.component';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutFormComponent } from './cart/checkout-form/checkout-form.component'; import { AppRoutingModule } from './app-routing.module';
import { SuccessComponent } from './success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    HeaderComponent,
    CartItemComponent,
    CheckoutFormComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
