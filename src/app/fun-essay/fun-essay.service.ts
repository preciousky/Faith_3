import {Injectable} from '@angular/core';
// import {Http, Headers, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class FunEssayService {
  public GETESSAYBYIDURL = 'mock-data/essay-mock.json';
  constructor(public http: HttpClient) { }

  public getEssayById(_id: number): Observable<any> {
    return this.http.get(this.GETESSAYBYIDURL);
  }
}

