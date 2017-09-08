import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
interface LoginData {
  username: string;
  password: string;
}

@Injectable()
export class ServiceService {
  public vaildLoginUrl = 'mock-data/login-mock.json';
  constructor(private http: HttpClient) { }

  public vaildLoginHttp(data: LoginData) {
    return this.http.get(this.vaildLoginUrl);
  }
}
