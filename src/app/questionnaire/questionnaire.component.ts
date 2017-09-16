import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnaireForm: FormGroup;
  userId;
  constructor(private fb: FormBuilder,
              public router: Router,
              public httpPostService: HttpPostService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.questionnaireForm = this.fb.group({
      q1 : [ 1 ],
      q2 : [ 1 ],
      q3 : [ 1 ],
      q4 : [ 1 ],
      q5 : [ 1 ],
      q6 : [ 1 ],
      q7 : [ 1 ],
      q8 : [ 1 ],
      q9 : [ 1 ],
      q10 : [ 1 ],
      q11 : [ 1 ],
      q12 : [ 1 ],
      q13 : [ 1 ],
      q14 : [ 1 ],
      q15 : [ 1 ],
      q16 : [ 1 ],
      q17 : [ 1 ],
      q18 : [ 1 ],
    });
    this.route.params.subscribe(params => {
      this.userId = params['_userId'];
    });
  }

  finishQuestions() {
      const body = JSON.stringify({
        'user_id': this.userId ,
        'answers': [this.questionnaireForm.value.q1,
                      this.questionnaireForm.value.q2,
                      this.questionnaireForm.value.q3,
                      this.questionnaireForm.value.q4,
                      this.questionnaireForm.value.q5,
                      this.questionnaireForm.value.q6,
                      this.questionnaireForm.value.q7,
                      this.questionnaireForm.value.q8,
                      this.questionnaireForm.value.q9,
                      this.questionnaireForm.value.q10,
                      this.questionnaireForm.value.q11,
                      this.questionnaireForm.value.q12,
                      this.questionnaireForm.value.q13,
                      this.questionnaireForm.value.q14,
                      this.questionnaireForm.value.q15,
                      this.questionnaireForm.value.q16,
                      this.questionnaireForm.value.q17,
                      this.questionnaireForm.value.q18]
      });
      // this.httpPostService.getReponseData('questionnaire', body)
      this.httpPostService.getReponseDataByPost('users/consult', body)
        .subscribe(data => {
          const d = data.json();
          console.log(d.code);
          if ( d.code === 1) {
            alert('问卷测试结束，您是' + d.description + '类型的客户，您现在可以登入平台了');
            this.router.navigate(['/']);
          }
        }, error => {
          // alert('http失败');
        } );
  }
}
