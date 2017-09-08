import { Component, OnInit, Input } from '@angular/core';
import { FunEssayService } from './fun-essay.service';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';


interface Essay {
  title?: string;
  author?: string;
  from?: string;
  update?: string;
  cont?: string;
}
@Component({
  selector: 'fun-essay',
  templateUrl: './fun-essay.component.html',
  styleUrls: ['./fun-essay.component.scss']
})
export class FunEssayComponent implements OnInit {
  essay: Essay;
  essayId;
  constructor(
    public FunEssayService: FunEssayService,
    private route: ActivatedRoute,
    private httpPostService: HttpPostService
  ) {
    this.essay = {};
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.essayId = params['_id'];
    });
    this.getDetails();
  }

  // _init(_id?: number): void {
  //   this.FunEssayService.getEssayById(_id)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.essay = data;
  //     });
  // }

  getDetails() {
    const body = JSON.stringify({
      new_id: this.essayId
      // TODO load data
    });
    // TODO update here
    // this.httpPostService.getReponseData('', body)
    this.httpPostService.getReponseTestDataByPost('get-news-details', body)
      .subscribe(data => {
        const d = data.json();
        this.essay = d;
        // TODO success
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }
}
