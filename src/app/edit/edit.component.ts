import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {CarrierService} from '../service/carrier.service';
import {HttpPostService} from '../service/http-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  validateForm: FormGroup;
  constructor(private fb: FormBuilder,
              public carrierService: CarrierService,
              public httpPostService: HttpPostService,
              public router: Router) {
    this.validateForm = this.fb.group({
      title             : [ '', [ Validators.required ] ],
      essay             : [ '', [ Validators.required ] ]
    });
  }

  ngOnInit() {
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  publish () {
    console.log(this.validateForm.controls['title'].value);
    const body = JSON.stringify({
      title: this.validateForm.controls['title'].value.toString(),
      cont: this.validateForm.controls['essay'].value.toString(),
      user_id: this.carrierService.userId
    });
    // TODO update here
    // this.httpPostService.getReponseData('', body)
    this.httpPostService.getReponseTestDataByPost('essay-publisher', body)
      .subscribe(data => {
        const d = data.json();
        if (d.code.toString() === '1') {
          alert('您的文章已经发布！');
          this.router.navigate(['/forum']);
        } else {
          alert('您的文章发布失败！');
        }
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }

}
