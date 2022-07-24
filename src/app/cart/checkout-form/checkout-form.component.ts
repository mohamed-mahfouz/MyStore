import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  isSucessCheckout = false;
  successCheckout: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/success']);
  }

}
