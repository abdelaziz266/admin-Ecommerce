import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductsComponent } from './component/products/products.component';
import { SelectComponent } from './component/select/select.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ViewProductsComponent } from './component/view-products/view-products.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductsComponent,
    SelectComponent,
    SpinnerComponent,
    ViewProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
