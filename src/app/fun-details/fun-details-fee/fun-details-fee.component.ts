import {Component, Input, OnInit} from '@angular/core';
import {HttpPostService} from '../../service/http-post.service';
interface FundFee {
  categories?: Array<any>;
  values?: Array<any>;
  limitations?: Array<any>;
}

@Component({
  selector: 'fun-details-fee',
  templateUrl: './fun-details-fee.component.html',
  styleUrls: ['./fun-details-fee.component.scss']
})
export class FunDetailsFeeComponent implements OnInit {
  @Input() fundId;
  details;
  fund_subscribe: FundFee;
  fund_purchase: FundFee;
  fund_redeem: FundFee;
  others: FundFee;

  constructor( public httpPostService: HttpPostService) {
    this.fund_purchase = {};
    this.fund_redeem = {};
    this.fund_subscribe = {};
    this.others = {};
  }
  ngOnInit() {
    const body = JSON.stringify({
      fund_id: this.fundId
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-fund-details-fee', body)
    this.httpPostService.getReponseDataByGet('funds?info_type=fees')
      .subscribe(data => {
        const d = data.json();
        this.details = d.fee;
        this.fund_subscribe = this.details.fund_subscribe;
        this.fund_purchase = this.details.fund_purchase;
        this.fund_redeem = this.details.fund_redeem;
        this.others = this.details.others;
        // TODO success
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }
}
