import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './pipes/currency.pipe';
import { LongTextPipe } from './pipes/long-text.pipe';



@NgModule({
  declarations: [
    CurrencyPipe,
    LongTextPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CurrencyPipe,
    LongTextPipe
  ]
})
export class SharedModule { }
