import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  modalisActive: boolean = false
  private timerSubscription?: Subscription

  ngOnInit(): void {

    $(function () {
      $("#accordion").accordion({
        icons: null,
        collapsible: true,
        active: false,
        heightStyle: "content"
      });
    });

    this.timerSubscription = timer(10000).subscribe(() => {
      this.modalisActive = true
    })
    
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe()
  }

}
