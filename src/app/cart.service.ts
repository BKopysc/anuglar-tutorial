import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Shipping } from './shippingInterface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
