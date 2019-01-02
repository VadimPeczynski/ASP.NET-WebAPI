import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category:string;
  @Input() selected:string;
  @Output() categoryChanged = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  changeCategory(){
    this.categoryChanged.emit(this.category);
  }
}
