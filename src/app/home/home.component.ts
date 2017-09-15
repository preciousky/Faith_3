import { Component, OnInit } from '@angular/core';
import {HttpPostService} from '../service/http-post.service';
import {Router} from "@angular/router";

interface ShowCard {
  name: String;
  id: number;
  src: String;
  info: String;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  picList: Array<Object>;
  fCardListRecommendation: Array<ShowCard>;
  count: Array<any>;
  constructor(private httpPostService: HttpPostService,
              private router: Router) {
    this.picList = [
      { src: './assets/pic/index_road.jpg', title: '' },
      { src: './assets/pic/index_friends.jpg', title: '' },
      { src: './assets/pic/index_people.jpg', title: '' },
      { src: './assets/pic/index-sea.jpg', title: '' },
    ];
  }

  ngOnInit() {
    this.setRecommendation();
  }

  setRecommendation() {
    const body = JSON.stringify({
      'num': '3'
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-recommendations', body)
    this.httpPostService.getReponseDataByGet('funds?info_type=recommendations')
      .subscribe(data => {
        // TODO success
        this.fCardListRecommendation = data.json().funds;
      }, error => {
        // TODO fail
        // alert('http失败');
      } );
  }

  toAllFunds() {
    this.router.navigate(['funlist', 'lv']);
  }
}
