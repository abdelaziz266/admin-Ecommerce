import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  base64: any = '';
  form!: FormGroup;
  constructor(
    private _ApiService: ApiService,
    private _FormBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this._FormBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
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

  changeImg(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue(event.target.value);
    };
  }
  addProductSelect(event: any) {
    this.form.get('category')?.setValue(event.target.value);
  }
  addProduct() {
    const modal = this.form.value;
    this._ApiService.addProduct(modal).subscribe(() => {
      console.log(this.form)
      alert('Add Product Success');
    });
  }
  UpdateProduct(item: any) {
    this.form.get('title')?.setValue(item.title);
    this.form.get('price')?.setValue(item.price);
    this.form.get('description')?.setValue(item.description);
    this.form.get('image')?.setValue(item.image);
    this.form.get('category')?.setValue(item.category);
    this.form.get('image')?.setValue(item.image);
    this.base64=item.image;
    console.log(this.form)
  }

  succUpdateProduct(){
    const modal = this.form.value;
    this._ApiService.addProduct(modal).subscribe(() => {
      console.log(this.form)
      alert('Update Product Success');
    });
  }
}
