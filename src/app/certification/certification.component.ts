import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {HttpPostService} from '../service/http-post.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  CertificationForm: FormGroup;
  userId;

  _submitForm() {
    for (const i in this.CertificationForm.controls) {
      this.CertificationForm.controls[ i ].markAsDirty();
    }
  }

  constructor(public router: Router,
  private fb: FormBuilder, public route: ActivatedRoute, public httpPostService: HttpPostService ) {}

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.CertificationForm.controls[ 'tcode' ].value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['_userId'];
      console.log(this.userId);
    });
    this.CertificationForm = this.fb.group({
      Id         : [ null, [ Validators.required ] ],
      realname   : [ null, [ Validators.required ] ],
      bankname    : [ null, [ Validators.required ] ],
      bankcardNo       : [ null, [ Validators.required ] ],
      bankarea       : [ null, [ Validators.required ] ],
      bankphone       : [ null, [ Validators.required ] ],
      tcode         : [ null, [ Validators.required ] ],
      retcode    : [ null, [ Validators.required, this.confirmationValidator ] ],
      // TODO set a way to make sure you are a human
      // captcha          : [ null, [ Validators.required ] ],
      captcha          : [ null ],
      agree            : [ false ]
    });
  }

  getFormControl(name) {
    return this.CertificationForm.controls[name];
  }

  toCertificate() {
    if (this.CertificationForm.invalid === false ) {
      // TODO send the data to server
      const body = JSON.stringify({
        'user_id': this.userId,
        'id': this.CertificationForm.value.Id,
        'realname': this.CertificationForm.value.realname,
        'bankname': this.CertificationForm.value.bankname,
        'bankcard_no': this.CertificationForm.value.bankcardNo,
        'bankphone': this.CertificationForm.value.bankphone,
        'bankarea': this.CertificationForm.value.bankarea,
        'tcode': this.CertificationForm.value.tcode,
      });
      // this.httpPostService.getReponseData('certification', body)
      this.httpPostService.getReponseTestDataByPost('certification', body)
        .subscribe(data => {
        const d = data.json();
        if ( d.code === '1') {
          alert('实名认证成功！可以选购基金！');
          this.router.navigate(['/funlist', 'reco']) ;
        }
      }, error => {
        // alert('http失败');
      } );
    }
  }
}
