import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  notify() {
    console.log('notify');
  }
}
