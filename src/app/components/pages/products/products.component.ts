import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/types/Product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy{
  products?: Product[]
  productsSubscribe?: Subscription
  loading: boolean = false
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true

    this.productsSubscribe = this.dataService.getProducts('https://testologia.ru/tea').subscribe(
      {
        next: (response) => {
          this.loading = false
          this.products = response;
        },
        error: (error) => {
          this.loading = false
          console.error(error);
          this.router.navigate(["/"])
        }
      }
    );

  
  }

  ngOnDestroy(): void {
    this.productsSubscribe?.unsubscribe()
  }
}
