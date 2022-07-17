import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  dataProducts: any;
  dataCategories: any;
  loading: boolean = true;
  cartProducts: any[] = [];
  constructor(private _ApiService: ApiService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this._ApiService.getAllProducts().subscribe(
      (response) => {
        this.dataProducts = response;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }

  getCategories() {
    this.loading = true;

    this._ApiService.getAllCategories().subscribe(
      (response) => {
        this.dataCategories = response;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    value === 'All' ? this.getProducts() : this.selectCategory(value);
  }

  selectCategory(keyword: string) {
    this.loading = true;

    this._ApiService.getTypeCategory(keyword).subscribe(
      (response) => {
        this.dataProducts = response;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let test = this.cartProducts.find((item) => item.item.id == event.item.id);
      if (test) {
        alert('This Product already in your Cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
