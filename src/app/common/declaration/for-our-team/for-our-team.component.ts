import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
interface Declaration {
  title?: string;
  update?: string;
  cont?: string;
}

@Component({
  selector: 'for-our-team',
  templateUrl: './for-our-team.component.html',
  styleUrls: ['./for-our-team.component.scss']
})
export class ForOurTeamComponent implements OnInit {
  declaration: Declaration;
  constructor(
    public http: Http) {
    this.declaration = { };
  }
  ngOnInit() {
    const url = 'declarations/forOurTeam.json';
    this.http.get(url).subscribe(data => {
      this.declaration = data.json();
      console.log(this.declaration);
    });
  }
}
