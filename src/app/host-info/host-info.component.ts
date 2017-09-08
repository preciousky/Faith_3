import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {HttpPostService} from '../service/http-post.service';

@Component({
  selector: 'host-info',
  templateUrl: './host-info.component.html',
  styleUrls: ['./host-info.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(-2000px)'})),
      transition('out => in', [

        animate(100)
      ]),
      transition('in => out', [
        animate(100, style({transform: 'translateX(1000px)'}))
      ])
    ])
  ]
})
export class HostInfoComponent implements OnInit {
  user;
  newUser;
  InputState;
  changed: boolean;
  userId: number;
  isAuth: boolean;

  constructor(private route: ActivatedRoute,
              public router: Router,
              public httpPostService: HttpPostService) { }

  ngOnInit() {
    this.user = {
      is_auth: false,
      usernama: null,
      realname: null,
      phone: null,
      email: null,
      address: null,
      id: null,
      owned_cards: [],
    };
    this.newUser =  {
      phone: null,
      email: null,
      address: null,
    };
    this.InputState = 'out'
    this.isAuth = false;
    this.userId = -1;
    this.changed = false;
    this.route.params.subscribe(params => {
      this.userId = params['_userId'];
    });
    this.getSettings();
  }

  confirm(code: string) {
    this.InputState = 'out';
    this.changed = false;
    if (code === '1') {
      if (this.newUser.phone != null) { this.user.phone = this.newUser.phone; }
      if (this.newUser.email != null) { this.user.email = this.newUser.email; }
      if (this.newUser.address != null) { this.user.address = this.newUser.address; }
      this.updateServerInfo();
    }
  }
  toCertificate() {
    this.router.navigate(['/certification', this.userId]);
  }
  updateServerInfo() {
    const body = JSON.stringify({
    'phone': this.user.phone,
    'email': this.user.email,
    'address': this.user.address
  });
    // TODO update here
    // this.httpPostService.getReponseData('update-basic-info', body)
    this.httpPostService.getReponseTestDataByPost('update-basic-info', body)
      .subscribe(data => {
        const d = data.json();
        if (d.code === '1') {
          alert('信息修改成功');
        }
      }, error => {
        // TODO fail
      } );
  }
  getSettings() {
    const body = JSON.stringify({
      // TODO load data
      user_id: this.userId
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-user-setting', body)
    this.httpPostService.getReponseTestDataByPost('get-user-settings', body)
      .subscribe(data => {
        const d = data.json();
        // TODO success
        this.user = d.user;
        if (this.user.is_auth === 'true') {
          this.isAuth = true;
        }
      }, error => {
        // TODO fail
      } );
  }
}
