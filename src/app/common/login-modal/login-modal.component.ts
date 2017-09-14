import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {HttpPostService} from '../../service/http-post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  LoginForm: FormGroup;
  user_id: number;
  constructor(
    private fb: FormBuilder,
    private subject: NzModalSubject,
    private httpPostService: HttpPostService,
    public router: Router
  ) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
     // remember: [ true ],
    });
    this.user_id = -1;
  }

  toLogin() {
    for (const i in this.LoginForm.controls) {
      this.LoginForm.controls[i].markAsDirty();
    }
    if (!this.LoginForm.controls['username'].hasError('required') && !this.LoginForm.controls['password'].hasError('required')) {
      const body = JSON.stringify({
        username: this.LoginForm.value.username,
        password: this.LoginForm.value.password
      });
      // TODO update here
      // this.httpPostService.getReponseData('login', body)
      this.httpPostService.getReponseTestDataByPost('login', body)
        .subscribe(data => {
          const d = data.json();
          // TODO success
          if (d.code ===  '1') {
            this.subject.next({code: 1, user_id: d.user_id, username: this.LoginForm.value.username});
            this.subject.destroy('onCancel');
          }else if (d.code === '6') {
              alert('密码错误！');
          }else {
            alert('登录失败with:code-' + d.code);
          }
          // TODO continue
        }, error => {
          // TODO fail
          this.subject.next({code: -1, user_id: -1, username: 'Mr.error'});
          alert('network error!');
        } );
    }
  }

  toReg() {
    this.router.navigate(['/reg']);
    this.subject.destroy('onCancel');
  }


}
