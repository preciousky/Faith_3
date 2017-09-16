import { Component, OnInit } from '@angular/core';
import {HttpPostService} from '../service/http-post.service';
import {Router} from '@angular/router';

interface ShowCard {
  name: string;
  fund_id: number;
  pic: string;
  reason: string;
  forecast_profit_rate: string;
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
    this.httpPostService.getReponseDataByGet('funds?info_type=recommendations')
      .subscribe(data => {
        this.fCardListRecommendation = data.json().funds;
        console.log(this.fCardListRecommendation);
        this.fCardListRecommendation.forEach(function (e) {
          e.pic = '1';
        });

      }, error => {
        console.log(error.message);
      });
  }

  toAllFunds() {
    this.router.navigate(['funlist', 'lv']);
  }
}
