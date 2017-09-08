import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
interface Declaration {
  title?: string;
  update?: string;
  cont?: string;
}

@Component({
  selector: 'for-privacy',
  templateUrl: './for-privacy.component.html',
  styleUrls: ['./for-privacy.component.scss']
})
export class ForPrivacyComponent implements OnInit {
  declaration: Declaration;
  constructor(
    public http: Http) {
    this.declaration = { };
  }
  ngOnInit() {
    const url = 'declarations/forPrivacy.json';
    this.http.get(url).subscribe(data => {
      this.declaration = data.json();
      console.log(this.declaration);
    });
  }
}
