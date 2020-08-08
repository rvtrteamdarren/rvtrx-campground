import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Payment } from '../../../data/payment.model';

@Component({
  selector: 'uic-newpaymentform',
  templateUrl: './newpaymentform.component.html',
  template: ``,

  styleUrls: ['./newpaymentform.component.scss'],
})
export class NewpaymentformComponent implements OnInit {
  showModal = false;

  @Output() newPayment: EventEmitter<Payment> = new EventEmitter<Payment>();

  PaymentForm = new FormGroup({
    Bank: new FormControl(''),
    CCNumber: new FormControl(''),
    ExpDate: new FormControl(''),
  });

  constructor() {}
  onSubmit() {
    this.showModal = !this.showModal;
    const payload = {
      cardExpirationDate: this.PaymentForm.value.ExpDate,
      cardName: this.PaymentForm.value.Bank,
      cardNumber: this.PaymentForm.value.CCNumber,
      id: '',
    } as Payment;
    this.newPayment.emit(payload);
    console.warn(this.PaymentForm.value);
  }

  ngOnInit(): void {}
}
