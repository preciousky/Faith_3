import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';

import { LoginModalComponent } from '../login-modal/login-modal.component';
import {assertNotNull} from '@angular/compiler/src/output/output_ast';
import {Router} from '@angular/router';
import {CarrierService} from '../../service/carrier.service';

@Component({
  selector: 'common-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  username: string;
  userId: number;
  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService,
    public route: Router,
    private carrier: CarrierService
  ) { }

  ngOnInit() {
    this.username = 'initial';
    this.userId = -1;
    this.searchForm = this.fb.group({
      search: ['', [ Validators.required ]]
    });
  }
  _submitSearch() {
    console.log(this.searchForm.value);
  }

  showLoginModal() {
    const subscription = this.modalService.open({
      title: '登录',
      content: LoginModalComponent,
      footer: false
    });
    subscription.subscribe(result => {
      console.log(result);
      if (result['code'] === 1) {
        console.log('登录成功 nav拿到user_id为' + result['user_id'] + '  username为' + result['username']);
        this.carrier.userId = result['user_id'];
        this.username =  result['username'];
        this.userId = result['user_id'];
      }else
      if (result['code'] === -1) {
        console.log('http失败 nav拿到user_id为' + result['user_id'] + '  username为' + result['username']);
      }

    });
  }

  toHost() {
    this.route.navigate(['/host', this.userId]);
  }
  tologout() {
    this.route.navigate(['/']);
    this.userId = -1;
    this.carrier.userId = -1;
  }
}
