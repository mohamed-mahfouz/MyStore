import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { IProduct } from '../models/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = "./assets/data.json";

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.url);
  }

  getProduct(id: number) {
    let productById = this.getProducts().subscribe((products: IProduct[]) => {
      map((products: IProduct[]) => {
        let product = products.find(product => product.id === id);
        return product;
      })
    }
    );

    return productById;
  }
}
