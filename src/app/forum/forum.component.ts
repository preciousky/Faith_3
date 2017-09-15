import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';
import {CarrierService} from '../service/carrier.service';

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  hotList: Array<Object>;
  hotPageNo = 1;
  hotPageSize = 5;
  hotTotal = 1;
  essaysList: Array<Object>;
  essaysPageNo = 1;
  essaysPageSize = 10;
  essaysTotal = 1;
  favList: Array<Object>;
  userId;
  constructor(
    public router: Router,
    public httpPostService: HttpPostService,
    public carrierService: CarrierService
  ) {
    this.hotList = [];
    this.essaysList = [];
    this.favList = [];
  }

  ngOnInit() {
    alert('论坛功能尚未开发完成，敬请期待');
    this.userId = this.carrierService.userId;
    this.getHotList(1);
    this.getEssaysList(1);
    this.getFavList();
    // for (let i = 0; i < 5; i++) {
    //   this.fNewList.push({
    //     id: i,
    //     title: '论坛文章测试',
    //     info: '的热中国公募基金行准行了激烈的观点交流和思维碰撞，诚为行业顶级盛会。',
    //     date: '2017-08-28',
    //     star: '12'
    //   });
    // }
  }

  scorllById(_id) {
    document.getElementById(_id).scrollIntoView();
  }

  toEdit() {
    this.router.navigate(['/edit']);
  }

  getHotList (value) {
    this.hotPageNo = value;
    const body = JSON.stringify({
      page_no: this.hotPageNo,
      page_size: this.hotPageSize
    });
    this.httpPostService.getReponseTestDataByPost('get-hot-list', body)
      .subscribe(data => {
        const d = data.json();
        // success
        this.hotList = d.hot_list;
        this.hotTotal = d.log_num;
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }
  getEssaysList(value) {
    this.essaysPageNo = value;
    const body = JSON.stringify({
      page_no: this.essaysPageNo,
      page_size: this.essaysPageSize
  });
    this.httpPostService.getReponseTestDataByPost('get-essays-list', body)
      .subscribe(data => {
        const d = data.json();
        // success
        this.essaysList = d.essays_list;
        this.essaysTotal = d.log_num;
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }
  getFavList() {
    const body = JSON.stringify({
      user_id: this.userId
    });
    // TODO update here
    // this.httpPostService.getReponseData('', body)
    this.httpPostService.getReponseTestDataByPost('get-fav-list', body)
      .subscribe(data => {
        const d = data.json();
        // success
        this.favList = d.fav_list;
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }

}
