import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products:any[]=[]
  carts: any[] = [];
  details:any;
  constructor(private _ApiService: ApiService) {}

  ngOnInit(): void {
    this.getAllCarts();
  }

  getAllCarts() {
    this._ApiService.getAllCarts().subscribe((response: any) => {
      this.carts = response;
    });
  }

  deleteCart(id: number) {
    this._ApiService.deleteCart(id).subscribe((response: any) => {
      this.getAllCarts();
      alert('Cart deleted success');
    });
  }

  viewCart(index: number) {
    this.products=[]
    this.details=this.carts[index];
    for (let x in this.details.products) {
      this._ApiService.getProductdetails(this.details.products[x].productId).subscribe((res)=>{
        this.products.push({item:res, quantity:this.details.products[x].quantity})
      })
    }
  }
}
