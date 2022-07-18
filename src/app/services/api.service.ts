import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _HttpClient: HttpClient) {}
// Get Api
  getAllProducts(): Observable<any> {
    return this._HttpClient.get(environment.baseApi + 'products');
  }
  getAllCategories(): Observable<any> {
    return this._HttpClient.get(environment.baseApi + 'products/categories');
  }
  getTypeCategory(keyWord: string): Observable<any> {
    return this._HttpClient.get(
      environment.baseApi + 'products/category/' + keyWord
    );
  }
  getProductdetails(id: any) {
    return this._HttpClient.get(environment.baseApi + 'products/' + id);
  }

  // Post Api
  addProduct(model:any)
  {
    return this._HttpClient.post(environment.baseApi+ 'products',model)
  }


  // cart api
  getAllCarts()
  {
    return this._HttpClient.get(environment.baseApi+ 'carts')
  }

  deleteCart(id:number)
  {
    return this._HttpClient.delete(environment.baseApi+ 'carts/' + id)
  }


}
