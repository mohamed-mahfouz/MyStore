import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-list/product-item-detail/product-item-detail.component';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutFormComponent } from './cart/checkout-form/checkout-form.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductItemDetailComponent
  },
  {
    path: 'checkout',
    component: CartComponent
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    HeaderComponent,
    CartItemComponent,
    CheckoutFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
