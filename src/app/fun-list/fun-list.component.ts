import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';

interface ShowCard {
  name: string;
  fund_id: number;
  pic: string;
  reason: string;
  forecast_profit_rate: string;
}

@Component({
  selector: 'fun-list',
  templateUrl: './fun-list.component.html',
  styleUrls: ['./fun-list.component.scss']
})
export class FunListComponent implements OnInit {
  fCardListRecommendation: Array<ShowCard>;
  fCardListSoon: Array<ShowCard>;
  tableData: Array<Object>;
  // remote loading
  _current: number;
  _total: number;
  _dataSet: Array<any>;
  _loading: boolean;
  _pageSize: number;
  constructor(
    private actRoute: ActivatedRoute,
    private httpPostService: HttpPostService,
    private router: Router
  ) {
    this.tableData = [];
    this._current = 1;
    this._total = 1;
    this._dataSet = []
    this._loading = true;
    this._pageSize = 10;
  }

  ngOnInit() {
    this.getRouteHref();
    this.setRecommendation();
    this.setSoon();
    this._refreshData();

  }
  setRecommendation() {
    const body = JSON.stringify({
      num: '3'
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-recommendations', body)
    this.httpPostService.getReponseDataByGet('funds?info_type=recommendations')
      .subscribe(data => {
      // TODO success
        this.fCardListRecommendation = data.json().funds;
        this.fCardListRecommendation.forEach(function (e) {
          e.pic = '1';
        });
    }, error => {
      // TODO fail
      // alert('http失败');
    } );
  }

  setSoon() {
    this.httpPostService.getReponseDataByGet('funds?info_type=soon')
      .subscribe(data => {
        // TODO success
        this.fCardListSoon = data.json().funds;
        this.fCardListSoon.forEach(function (e) {
          e.pic = '1';
        });
      }, error => {
        // TODO fail
        // alert('http失败');
      } );
  }

  private getRouteHref() {
    return this.actRoute.params.subscribe(params => {
      // window.location.hash = params._name;
      this.scorllById(params._name);
    });
  }

  scorllById(_id) {
    document.getElementById(_id).scrollIntoView();
  }

  toDetails(fundId: number) {
    this.router.navigate(['details', fundId]);
  }

  _refreshData = () => {
    this._loading = true;
    this.httpPostService.getReponseDataByGet('funds?page=' + this._current + '&per_page=' + this._pageSize)
      .subscribe(data => {
        const d = data.json();
        this._dataSet = d.funds;
        this._total = d.log_num;
        this._loading = false;
      });
  }
}
