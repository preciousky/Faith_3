import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpPostService} from '../service/http-post.service';

@Component({
  selector: 'fun-green',
  templateUrl: './fun-green.component.html',
  styleUrls: ['./fun-green.component.scss']
})
export class FunGreenComponent implements OnInit {
  DangerEduList: Array<Object>;
  LawsList: Array<Object>;
  constructor(
    private actRoute: ActivatedRoute,
    private httpPostService: HttpPostService
  ) {
    this.DangerEduList = [];
    this.LawsList = [];
  }

  ngOnInit() {
    this.getRouteHref();
    this.getEducationList();
    // for (let i = 0; i < 3; i++) {
    //   this.fNewList.push({
    //     id: i,
    //     title: '大资管 2.0 时代到来 公募 FOF 成未来创新中坚力量',
    //     info: '金融、优势、发展前景等问题进行了激烈的观点交流和思维碰撞，诚为行业顶级盛会。',
    //     from: '西安电子科技大学'
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

  getEducationList() {
    const body = JSON.stringify({
      // TODO load data
      // actually this is a get function
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-educations-details', body)
    this.httpPostService.getReponseTestDataByPost('get-educations-list', body)
      .subscribe(data => {
        const d = data.json();
        this.DangerEduList = d.danger_edu;
        this.LawsList = d.laws;
        // TODO success
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }
}
