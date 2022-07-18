import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() labelData: any;
  @Input() data: any[] = [];
  @Input() select:any=''
  @Input() all: boolean = true;
  @Output() selectValue = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  optionChange(evant: any) {
    this.selectValue.emit(evant);
  }
}
