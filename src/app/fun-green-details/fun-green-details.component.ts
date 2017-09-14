import { Component, OnInit } from '@angular/core';
import {FunEssayService} from '../fun-essay/fun-essay.service';
import {ActivatedRoute} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';
interface Essay {
  title?: string;
  author?: string;
  from?: string;
  update?: string;
  cont?: string;
}
@Component({
  selector: 'fun-green-details',
  templateUrl: './fun-green-details.component.html',
  styleUrls: ['./fun-green-details.component.scss']
})
export class FunGreenDetailsComponent implements OnInit {
  essay: Essay;
  essayId;
  constructor(public FunEssayService: FunEssayService,
  private route: ActivatedRoute,
              private httpPostService: HttpPostService) {
    this.essay = {}; }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.essayId = params['_id'];
    });
    this.getDetails();
    // this._init(this.essayId);
    // console.log(this.essayId);
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
      education_id: this.essayId
    // TODO load data
  });
    // TODO update here
    // this.httpPostService.getReponseData('', body)
    this.httpPostService.getReponseTestDataByPost('get-educations-details', body)
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
