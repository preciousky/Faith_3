import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';
import {constructDependencies} from '@angular/core/src/di/reflective_provider';
@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  favFunds: Array<any>;
  userId;
  user;
  fav: Array<any>;
  savingDate;
  savingRate;

  // own message
  o_current = 1;
  o_total = 1;
  o_dataSet = [];
  o_loading = false;
  o_pageSize = 1;

  // trade message
  t_current = 1;
  t_total = 1;
  t_dataSet = [];
  t_loading = false;
  t_pageSize = 1;

  constructor(public router: Router,
              private httpPostService: HttpPostService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.getUserId();
    this.user = {
      is_auth: false,
      savings: null,
      total_asset: null,
      total_profit: null,
      funds_netvalue: null,
      favorite: null
    };
    this.setUserInfo();
    this._orefreshData();
    this._trefreshData();
  }

  setUserInfo() {
    this.httpPostService.getReponseDataByGet('users/' + this.userId + '?info_type=asset')
      .subscribe(data => {
        const d = data.json();
        this.user = d.user;
        this.fav = d.user.favorite;
        this.savingDate = d.saving_date;
        this.savingRate = d.saving_rate;
        console.log(d);
      }, error => {
        console.log('Can not find the user');
      });
  }

  toHostInfo() {
    this.router.navigate(['/host-info', this.userId.toString()]);
  }

  toCertificate() {
    this.router.navigate(['/certification', this.userId]);
  }

  toDetails(fundId: number) {
    this.router.navigate(['/details', fundId]);
  }

  getUserId() {
    this.route.params.subscribe(param => {
      this.userId = param['_userId'];
    });
  }

  _trefreshData = () => {
    this.t_loading = true;
    this.httpPostService.getReponseDataByGet('users/' + this.userId + '/trades?page=' + this.t_current + '&per_page=' + this.t_pageSize)
      .subscribe((tdata: any) => {
        const td = tdata.json();
        if (td.code === 2) {
          this.t_total = 0;
          this.t_loading = false;
        } else {
          this.t_dataSet = td.trade_log;
          this.t_total = td.log_num;
          this.t_loading = false;
        }
      });
  }

  _orefreshData = () => {
    this.o_loading = true;
    this.httpPostService.getReponseDataByGet('users/' + this.userId + '?info_type=bought_funds&page=' + this.o_current + '&per_page=' + this.o_pageSize)
      .subscribe((odata: any) => {
        const od = odata.json();
        if (od.code === 2) {
          this.o_total = 0;
          this.o_loading = false;
        } else {
          this.o_dataSet = od.owned_funds;
          this.o_total = od.log_num;
          this.o_loading = false;
        }
      });
  }

  toSave() {
    this.router.navigate(['/toBuy', {userId: this.userId, fundId: '-2', fundName: '储蓄罐'}]);
  }
}
