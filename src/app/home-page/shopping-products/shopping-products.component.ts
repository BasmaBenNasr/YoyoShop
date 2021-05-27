import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import {ProductsService} from 'src/app/services/products.service'

@Component({
  selector: 'app-shopping-products',
  templateUrl: './shopping-products.component.html',
  styleUrls: ['./shopping-products.component.scss']
})
export class ShoppingProductsComponent implements OnInit {

  productList:Products[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((items: Products[]) => {
      this.productList = items
    })
  }
}
