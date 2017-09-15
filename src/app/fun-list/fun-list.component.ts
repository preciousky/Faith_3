import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';

@Component({
  selector: 'fun-list',
  templateUrl: './fun-list.component.html',
  styleUrls: ['./fun-list.component.scss']
})
export class FunListComponent implements OnInit {
  fCardListRecommendation: Array<Object>;
  fCardListSoon: Array<Object>;
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
    }, error => {
      // TODO fail
      // alert('http失败');
    } );
  }

  setSoon() {
    const body = JSON.stringify({
      num: '3'
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-soon-funds', body)
    this.httpPostService.getReponseDataByGet('funds?info_type=soon')
      .subscribe(data => {
        // TODO success
        this.fCardListSoon = data.json().funds;
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
    const body = JSON.stringify({
      // TODO load data
      page_no: this._current,
      page_size: this._pageSize
    });
    // this.httpPostService.getReponseData(this._current, this._pageSize, 'get-fund-list')
    this.httpPostService.getReponseDataByGet('funds?page=' + this._current + '&per_page=' + this._pageSize)
      .subscribe(data => {
        const d = data.json();
        this._dataSet = d.funds;
        this._total = d.log_num;
        this._loading = false;
      });
  }
}
