import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './carousel/carousel.component';
import { ShoppingProductsComponent } from './shopping-products/shopping-products.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ShoppingProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MDBBootstrapModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports:[
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ShoppingProductsComponent
  ]
})
export class HomePageModule { }
