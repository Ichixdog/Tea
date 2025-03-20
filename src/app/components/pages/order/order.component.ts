import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  form: FormGroup;
  orderSubscribe?: Subscription
  formValues = {
    name: "",
    last_name: "", 
    phone: "", 
    country: "", 
    zip: "", 
    product: "", 
    address: "", 
    comment: ""
  }
  orderComplete: boolean = false
  orderFailed: boolean = false

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private dataService: DataService) {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[A-za-zА-Яа-яЁё]+$")]],
      surname: ["", [Validators.required, Validators.pattern("^[A-za-zА-Яа-яЁё]+$")]],
      product: [route.snapshot.queryParamMap.get("title")],
      phone: ["", [Validators.required, Validators.pattern("^\\+?\\d{11}$")]],
      country: ["", [Validators.required]],
      zip: ["", [Validators.required]],
      address: ["", [Validators.required, Validators.pattern("^[A-Za-zА-Яа-яЁё0-9\s/-]+$")]],
      comment: ["", [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.form.get("product")?.disable()
  }

  onSubmit(): void{
    if(this.form.valid){
      this.orderFailed = false
      this.form.get("product")?.enable()
      const formData = this.form.value

      this.formValues = {
        name: formData.name,
        last_name: formData.surname,
        phone: formData.phone,
        country: formData.country,
        zip: formData.zip,
        product: formData.product,
        address: formData.address,
        comment: formData.comment
      }

      this.orderSubscribe = this.dataService.createOrder(this.formValues).subscribe(response => {
        console.log(response)
        if(response.success && !response.message){
          this.form.get("product")?.disable()
          this.orderComplete = true
        }
      })
    } else{
      this.orderFailed = true
    }
  }

  ngOnDestroy(): void {
    this.orderSubscribe?.unsubscribe()
  }

}
