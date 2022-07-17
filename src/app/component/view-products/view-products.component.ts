import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
})
export class ViewProductsComponent implements OnInit {
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  @Input() itemId:any
  changeButton: boolean = true;
  amount:number=0
  constructor() {}

  ngOnInit(): void {}

  addCart() {
    this.item.emit({item:this.data , quantity:this.amount});
  }
}
