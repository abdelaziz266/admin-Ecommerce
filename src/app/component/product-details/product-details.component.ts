import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  data: any = {};
  loading: boolean = true;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ApiService: ApiService
  ) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    this.loading = false;
    this._ApiService.getProductdetails(this.id).subscribe((response) => {
      this.loading = true;
      this.data = response;
    });
  }
}
