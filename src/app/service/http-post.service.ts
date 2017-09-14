import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class HttpPostService {

  constructor(public http: Http) { }
  getReponseDataByPost(url: string, body: any) {
    const headers = new Headers({'Content-Type': 'application/json'}); // 其实不表明 json 也可以, ng 默认好像是 json
    const options = new RequestOptions({headers: headers});

    // TODO to test, please delete it later
    const testURL = './mock-data/' + url + '.json';
    return this.http.post(testURL, body, options);

  }
  getReponseDataByGet(url: string) {
    const headers = new Headers({'Content-Type': 'application/json'}); // 其实不表明 json 也可以, ng 默认好像是 json
    const options = new RequestOptions({headers: headers});
    const testURL = './mock-data/' + url + '.json';
    return this.http.get(testURL, options);
  }
  getReponseDataByPut(url: string, body: any) {
    const headers = new Headers({'Content-Type': 'application/json'}); // 其实不表明 json 也可以, ng 默认好像是 json
    const options = new RequestOptions({headers: headers});
    const testURL = './mock-data/' + url + '.json';
    return this.http.put(testURL, options);
  }
  getReponseTestDataByPost(url: string, body: any) {
    const testURL = './mock-data/' + url + '.json';

    console.log('------------------------start------------------------------');
    console.log('request data:');
    console.log(body);
    console.log('······················································');
    console.log('reponse data:');
    this.http.get(testURL).subscribe(data => {
      console.log(data.json());
      console.log('--------------------------end--------------------------');
    });

    return this.http.get(testURL);
  }
}
