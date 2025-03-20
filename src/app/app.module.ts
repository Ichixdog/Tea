import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductsComponent } from './components/pages/products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { LongTextPipe } from './pipes/long-text.pipe';
import { ProductComponent } from './components/pages/product/product.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { OrderComponent } from './components/pages/order/order.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    LongTextPipe,
    ProductComponent,
    CurrencyPipe,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
