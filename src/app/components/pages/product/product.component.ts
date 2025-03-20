import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/types/Product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  loading: boolean = false

  productId: string | null = ""

  productSubscribe?: Subscription

  product?: Product

  constructor(private dataService: DataService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get("id")
    this.loading = true
    this.productSubscribe = this.dataService.getProduct("https://testologia.ru/tea", this.productId).subscribe(
      {
        next: (response) =>{
          this.loading = false
          this.product = response
        },
        error: (error) =>{
          this.loading = false
          console.error(error)
          this.router.navigate(["/"])
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.productSubscribe?.unsubscribe()
  }

}
