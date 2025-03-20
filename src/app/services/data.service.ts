import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { Product } from '../types/Product.type';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getProducts(url: string): Observable<Product[]> {
    return this.http.get<Product[]>(url).pipe(
      tap(data => console.log(data)),
      catchError(error => {
        console.error(error)
        throw new error
      })
    )
  }

  getProduct(url: string, id: string | null): Observable<Product>{
    return this.http.get<Product>(url + `?id=${id}`).pipe(
      tap(data => console.log(data)),
      catchError(error => {
        console.error(error)
        throw new error
      })
    )
  }

  createOrder(data: {name: string, last_name: string, phone: string, country: string, zip: string, product: string, address: string, comment?: string}){
    return this.http.post<{success: boolean, message?: string}>("https://testologia.ru/order-tea", data)
  }
}
