import { Component, OnInit } from '@angular/core';
import {FunEssayService} from '../fun-essay/fun-essay.service';
import {ActivatedRoute} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {CarrierService} from '../service/carrier.service';


interface Essay {
  title?: string;
  author?: string;
  date?: string;
  cont?: string;
}
@Component({
  selector: 'forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.scss']
})
export class ForumDetailsComponent implements OnInit {
  essay: Essay;
  essayId;
  _current: number;
  _total: number;
  _dataSet: Array<any>;
  _loading: boolean;
  _pageSize: number;
  validateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private httpPostService: HttpPostService,
    public carrierService: CarrierService,
    private fb: FormBuilder
  ) {
    this.essay = {};
    this._current = 1;
    this._total = 1;
    this._dataSet = [];
    this._loading = true;
    this._pageSize = 10;
    this.validateForm = this.fb.group({
      comment : [ '', [ Validators.required ] ]
    });
}
  ngOnInit() {
    this._refreshData();
    this.route.params.subscribe(params => {
      this.essayId = params['_id'];
    });
    this.getEssay();
  }

  _refreshData = () => {
    this._loading = true;
    const body = JSON.stringify({
      // TODO load data
      essay_id: this.essayId,
      page_no: this._current,
      page_size: this._pageSize
    });
    // this.httpPostService.getReponseData(this._current, this._pageSize, 'get-fund-list')
    this.httpPostService.getReponseTestDataByPost('get-comments', body)
      .subscribe(data => {
        const d = data.json();
        this._dataSet = d.comments;
        this._total = d.log_num;
        this._loading = false;
      });
  }

  getFormControl(name) {
      return this.validateForm.controls[ name ];
    }

  getEssay() {
    const body = JSON.stringify({
      essay_id: this.essayId
    });
    // TODO update here
    // this.httpPostService.getReponseData('', body)
    this.httpPostService.getReponseTestDataByPost('get-forum-essay', body)
      .subscribe(data => {
        const d = data.json();
        // success
        this.essay = d;
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }

  commentPublish() {
    const body = JSON.stringify({
      comment: this.validateForm.controls['comment'].value.toString(),
      uer_id: this.carrierService.userId,
      essay_id: this.essayId
    });
    // TODO update here
    // this.httpPostService.getReponseData('', body)
    this.httpPostService.getReponseTestDataByPost('comment-publisher', body)
      .subscribe(data => {
        const d = data.json();
        //  success
        if (d.code.toString() === '1') {
          alert('您的评论发表成功！');
          this._refreshData();
        } else {
          alert('您的评论未能发表成功！');
        }
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }

  toCollect () {
    const body = JSON.stringify({
      user_id: this.carrierService.userId,
      essay_id: this.essayId
    });
    // TODO update here
    // this.httpPostService.getReponseData('forum-essay-collect', body)
    this.httpPostService.getReponseTestDataByPost('forum-essay-collect', body)
      .subscribe(data => {
        const d = data.json();
        if (d.code.toString() === '1') {
          alert('您成功收藏该文章！');
          // TODO update the code
        } else if (d.code.toString() === 'XXX') {
          alert('你已经收藏过该篇文章！');
        } else {
          alert('您未能收藏成功该文章！');
        }
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }

}
