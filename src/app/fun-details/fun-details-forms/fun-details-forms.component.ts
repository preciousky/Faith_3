import { Component, OnInit } from '@angular/core';
import {HttpPostService} from '../../service/http-post.service';

@Component({
  selector: 'fun-details-forms',
  templateUrl: './fun-details-forms.component.html',
  styleUrls: ['./fun-details-forms.component.scss']
})
export class FunDetailsFormsComponent implements OnInit {

  constructor(private httpPostService: HttpPostService) { }

  ngOnInit() {
    const body = JSON.stringify({
      // TODO load data
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-fund-details-forms', body)
    // this.httpPostService.getReponseTestDataByPost('get-fund-details-forms', body)
    //   .subscribe(data => {
    //     const d = data.json();
    //     // TODO success
    //     return true;
    //   }, error => {
    //     // TODO fail
    //     // alert('http失败');
    //     return false;
    //   } );
  }

}
