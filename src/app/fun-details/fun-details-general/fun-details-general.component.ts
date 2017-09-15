import {Component, Input, OnInit} from '@angular/core';
import {HttpPostService} from '../../service/http-post.service';
interface  GeneralDetails {
  name?: string;
  code?: string;
  full_name?: string;
  type?: string;
  found_date?: string;
  state?: string;
  trade_state?: string;
  company?: string;
  manager?: string;
  mng_fee?: string;
  save_fee?: string;
  first_scale?: string;
  lastest_value?: string;
  bank?: string;
  lastest_scala?: string;
}

@Component({
  selector: 'fun-details-general',
  templateUrl: './fun-details-general.component.html',
  styleUrls: ['./fun-details-general.component.scss']
})
export class FunDetailsGeneralComponent implements OnInit {
  details: GeneralDetails;
  @Input() fundId;
  constructor( public httpPostService: HttpPostService) {
    this.details = {};
  }
  ngOnInit() {
    this.onTest();
  }
  onTest() {
    // 完成 fund 信息的赋值
    const body = JSON.stringify({
      fund_id: this.fundId
    });
    // this.httpPostService.getReponseData('get-fund-details-general',body)
    this.httpPostService.getReponseDataByGet('funds/' + this.fundId + '?info_type=basic')
      .subscribe(data => {
        const d = data.json();
        this.details = d.fund;
        // TODO success
      }, error => {
        // TODO fail
        // alert('http失败');
      });
  }


}
