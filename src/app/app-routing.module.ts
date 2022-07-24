import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-list/product-item-detail/product-item-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';

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
    {
        path: 'success',
        component: SuccessComponent
    },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '**', redirectTo: 'products', pathMatch: 'full' }
];


@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }
