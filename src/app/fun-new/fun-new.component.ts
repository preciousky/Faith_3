import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpPostService} from '../service/http-post.service';

@Component({
  selector: 'fun-new',
  templateUrl: './fun-new.component.html',
  styleUrls: ['./fun-new.component.scss']
})

export class FunNewComponent implements OnInit {
  FOFList: Array<Object>;
  PPPList: Array<Object>;
  GreenList: Array<Object>;
  constructor(
    private actRoute: ActivatedRoute,
    private httpPostService: HttpPostService
  ) {
    this.FOFList = [];
    this.PPPList = [];
    this.GreenList = [];
  }

  ngOnInit() {
    this.getRouteHref();
    this.getNewsList();
    // for (let i = 0; i < 5; i++) {
    //   this.fNewList.push({
    //     id: i,
    //     title: '大资管 2.0 时代到来 公募 FOF 成未来创新中坚力量',
    //     info: '金融界网站7月27方基金，诚为行业顶级盛会。',
    //     date: '2017-08-28'
    //   });
    // }
  }
  private getRouteHref() {
    return this.actRoute.params.subscribe(params => {
      this.scorllById(params._name);
    });
  }

 scorllById(_id) {
    document.getElementById(_id).scrollIntoView();
  }

  getNewsList() {
    const body = JSON.stringify({
      // TODO load data
    });
    // TODO update here
    // this.httpPostService.getReponseData('', body)
    this.httpPostService.getReponseTestDataByPost('get-news-list', body)
      .subscribe(data => {
        const d = data.json();
        this.FOFList = d.FOF;
        this.PPPList = d.PPP;
        this.GreenList = d.green;
        // TODO success
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }

}
