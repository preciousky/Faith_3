import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {HttpPostService} from '../service/http-post.service';

@Component({
  selector: 'to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.scss']
})
export class ToBuyComponent implements OnInit {
  radioValue = 'A';
  toBuyForm: FormGroup;
  current: number;
  userId: string;
  fundId: string;
  fundName: string;
  expense: number; // 购买基金的金额数
  fee: number; // 手续费
  bankcards;
  resultCode: number ;
  msg;
  constructor(public route: ActivatedRoute,
              public router: Router,
              private fb: FormBuilder,
              private httpPostService: HttpPostService) { }

  ngOnInit() {
    this.expense = -1;
    this.fee = -1;
    this.bankcards = [];
    this.current = 0;
    this.resultCode = -1;
    this.userId = this.route.params['value'].userId;
    this.fundId = this.route.params['value'].fundId;
    this.fundName = this.route.params['value'].fundName;
    this.toBuyForm = this.fb.group({
      agree: false,
      input_number   : [ 0 ],
      radio_button   : [ 2 ],
      radio_group :   [ -1 ],
    });
    if (this.fundId === '-2') {
      console.log(this.fb);
    }
    this.getBankcards();
  }

  getBankcards() {
    const body = JSON.stringify({
      user_id: this.userId
    });
    this.httpPostService.getReponseDataByGet('users/' + this.userId + '/bankcards')
      .subscribe(data => {
        const d = data.json();
        console.log(d);
        this.bankcards = d;
      }, error => {
        console.log('failed in getBankcards() function');
      } );
  }

  next1_2() {
    if (this.toBuyForm.controls['radio_button'].value === 2 && this.toBuyForm.controls['radio_group'].value === -1) {
      alert('您还没有选择银行卡！');
    } else {
      this.current = 1;
      this.expense = this.toBuyForm.controls['input_number'].value;
      console.log(this.fundId);
      this.httpPostService.getReponseDataByGet('funds/poundage?fund_id=' + this.fundId + '&cost=' + this.expense)
        .subscribe(data => {
          const d = data.json();
          this.fee = d.fee;
          return true;
        }, error => {
          // TODO fail
          // alert('http失败');
          return false;
        } );
    }

  }

  checkToBuy() {
    this.current = 2;
    // TODO http
    const body = JSON.stringify({
      // TODO load data
      user_id: this.userId,
      pay_mode: this.toBuyForm.controls['radio_button'].value, // 如果是1 下面的bankcard_no就没有用了
      bankcard_no: this.toBuyForm.controls['radio_group'].value,
      expense: this.expense, // 是买的基金的金额 不包括手续费
      fund_id: this.fundId
    });
    // TODO update here
    // this.httpPostService.getReponseData('', body)
    this.httpPostService.getReponseDataByPost('users/' + this.userId + '/trades', body)
      .subscribe(data => {
        const d = data.json();
         this.resultCode = (d.code === 1) ? 1 : -1;
         this.emitResult();
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }

  emitResult() {
    console.log('emit msg!');
    if (this.resultCode === 1) {
      this.msg = '您已经成功购买您的基金！';
    } else {
      this.msg = '抱歉，您本次购买未能成功！';
    }
  }

  toFundList() {
    this.router.navigate(['/funlist', 'reco']);
  }
}
