import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICartItem } from '../../models/ICartItem';
import { IProduct } from '../../models/Iproduct';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product!: IProduct | undefined;
  amount: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedAmount: number = 1;
  errorMessage = '';
  pageTitle = 'product details';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productsService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  addToCart() {
    let cartItem: ICartItem = {
      price: this.product?.price,
      amount: this.selectedAmount,
      name: this.product?.name,
      url: this.product?.url
    };

    this.cartService.sendMsg(cartItem);
    alert("Added to cart!");
  }

}
