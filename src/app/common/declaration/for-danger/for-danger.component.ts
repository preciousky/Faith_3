import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
interface Declaration {
  title?: string;
  update?: string;
  cont?: string;
}

@Component({
  selector: 'for-danger',
  templateUrl: './for-danger.component.html',
  styleUrls: ['./for-danger.component.scss']
})
export class ForDangerComponent implements OnInit {
  declaration: Declaration;
  constructor(
    public http: Http) {
    this.declaration = { };
  }
  ngOnInit() {
    const url = 'declarations/forDanger.json';
    this.http.get(url).subscribe(data => {
      this.declaration = data.json();
      console.log(this.declaration);
    });
  }
}
