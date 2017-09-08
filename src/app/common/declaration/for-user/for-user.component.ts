import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
interface Declaration {
  title?: string;
  update?: string;
  cont?: string;
}
@Component({
  selector: 'for-user',
  templateUrl: './for-user.component.html',
  styleUrls: ['./for-user.component.scss']
})
export class ForUserComponent implements OnInit {

  declaration: Declaration;
  constructor(
    public http: Http) {
    this.declaration = { };
  }
  ngOnInit() {
    const url = 'declarations/forUser.json';
    this.http.get(url).subscribe(data => {
      this.declaration = data.json();
      console.log(this.declaration);
    });
  }
}
