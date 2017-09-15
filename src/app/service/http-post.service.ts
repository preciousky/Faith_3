import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class HttpPostService {

  constructor(public http: Http) { }
  getReponseDataByPost(url: string, body: any) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    }); // 其实不表明 json 也可以, ng 默认好像是 json
    const options = new RequestOptions({headers: headers});
    const URL = 'http://localhost:3000/api/' + url;
    return this.http.post(URL, body, options);
  }
  getReponseDataByGet(url: string) {
    const headers = new Headers({'Content-Type': 'application/json'}); // 其实不表明 json 也可以, ng 默认好像是 json
    const options = new RequestOptions({headers: headers});
    const URL = 'http://localhost:3000/api/' + url;
    return this.http.get(URL, options);
  }
  getReponseDataByPut(url: string, body: any) {
    const headers = new Headers({'Content-Type': 'application/json'}); // 其实不表明 json 也可以, ng 默认好像是 json
    const options = new RequestOptions({headers: headers});
    const URL = 'http://localhost:3000/api/' + url;
    return this.http.put(URL, options);
  }
  getReponseTestDataByPost(url: string, body: any) {
    const URL = './mock-data/' + url;

    console.log('------------------------start------------------------------');
    console.log('request data:');
    console.log(body);
    console.log(body.toString().match(/new_id/));
    console.log('······················································');
    console.log('reponse data:');
    if (body.toString().match(/new_id/) != null) {
      console.log(body.toString().replace(/[^0-9]/ig, ''));
      return this.http.get(URL + body.toString().replace(/[^0-9]/ig, '') +  '.json');
    } if (body.toString().match(/education_id/) != null) {
      return this.http.get(URL + body.toString().replace(/[^0-9]/ig, '') +  '.json');
    } else {
      this.http.get(URL + '.json').subscribe(data => {
        console.log(data.json());
        console.log('--------------------------end--------------------------');
      });
      return this.http.get(URL + '.json');
    }
  }
}


