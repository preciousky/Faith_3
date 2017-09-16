import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {HttpPostService} from '../service/http-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  RegForm: FormGroup;
  userId;
  _submitForm() {
    for (const i in this.RegForm.controls) {
      this.RegForm.controls[ i ].markAsDirty();
    }
  }

  constructor(private fb: FormBuilder, public httpPostService: HttpPostService, public router: Router) {

  }

  // updateConfirmValidator() {
  //   /** wait for refresh value */
  //   setTimeout(_ => {
  //     this.RegForm.controls[ 'checkPassword' ].updateValueAndValidity();
  //   });
  // }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.RegForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  ngOnInit() {
    this.userId = -1;
    this.RegForm = this.fb.group({
      username          : [ null, [ Validators.required ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      // TODO set a way to make sure you are a human
      // captcha          : [ null, [ Validators.required ] ],
      captcha          : [ null ],
      agree            : [ false ]
    });


    }
    toReg() {
      if (this.RegForm.invalid === false) {
        // TODO fetch and deal with the data from view
        // TODO and set this.userId by the response data
          // TODO send the data to server
          const body = JSON.stringify({
            'username': this.RegForm.value.username,
            'password': this.RegForm.value.password
          });
          // this.httpPostService.getReponseData('certification', body)
          this.httpPostService.getReponseDataByPost('users/signup', body)
            .subscribe(data => {
              const d = data.json();
              console.log('signup' + d.code);
              if ( d.code === 1) {
                alert('注册成功！可以进行问卷测试！');
                this.userId = d.user_id;
                this.router.navigate(['/questionnaire', this.userId ]);
              }
            }, error => {
              // alert('http失败');
            } );
      }
  }

  getFormControl(name) {
    return this.RegForm.controls[name];
  }
}
