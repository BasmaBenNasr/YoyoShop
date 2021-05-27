import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {


  @Input()
  items!: Products;
  constructor() { }

  ngOnInit(): void {
  }

}
