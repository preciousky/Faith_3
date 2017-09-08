import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'fun-tool',
  templateUrl: './fun-tool.component.html',
  styleUrls: ['./fun-tool.component.scss']
})
export class FunToolComponent implements OnInit {
  toolOne: FormGroup;
  toolTwo: FormGroup;
  toolThree: FormGroup;
  resultOne: any;
  resultTwo: any;
  resultThree: any;

  constructor(
    private fb: FormBuilder
  ) {
    this.resultOne = { one: null, two: null };
    this.resultTwo = { one: null, two: null };
    this.resultThree = { one: null, two: null };
  }

  ngOnInit() {
    this._initFrom();
  }
  private _initFrom(): void {
    this.toolOne = this.fb.group({
      amount: [ null, [ Validators.required ] ],
      netValue: [ null, [ Validators.required ] ],
      rate: [ null, [Validators.required] ],
    });
    this.toolTwo = this.fb.group({
      portio: [ null, [ Validators.required ] ],
      netValue: [ null, [ Validators.required ] ],
      rate: [ null, [Validators.required] ],
    });
    this.toolThree = this.fb.group({
      investment: [ null, [ Validators.required ] ],
      income: [ null, [ Validators.required ] ],
      deadline: [ null, [Validators.required] ],
    });
  }
  getOne() {
    for (const i in this.toolOne.controls) {
      this.toolOne.controls[ i ].markAsDirty();
    }
    if (this.toolOne.invalid !== true) {
      this.resultOne.one = this.toolOne.value.amount - (this.toolOne.value.amount / (1 + this.toolOne.value.rate / 100 ));
      this.resultOne.two = this.toolOne.value.amount / (1 + this.toolOne.value.rate / 100 ) / this.toolOne.value.netValue ;
    }
  }
  getTwo() {
    for (const i in this.toolTwo.controls) {
      this.toolTwo.controls[ i ].markAsDirty();
    }
    if (this.toolTwo.invalid !== true) {
      const value = this.toolTwo.value;
      this.resultTwo.one = value.portio * value.netValue * value.rate / 100;
      this.resultTwo.two = value.portio * value.netValue - value.portio;
    }
  }
  getThree() {
    for (const i in this.toolThree.controls) {
      this.toolThree.controls[ i ].markAsDirty();
    }
    if (this.toolThree.invalid !== true) {
      const value = this.toolThree.value;
      this.resultThree.one = (value.income - value.investment) / 365;
      this.resultThree.two  = (value.income - value.investment) / value.deadline;
    }
  }
}
