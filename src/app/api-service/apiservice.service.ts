import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIServiceService {

  constructor(private http:Http) { }

  getData() {

    return this.http

    .get('http://jsonplaceholder.typicode.com/users')
    .map(result => result.json())
    .catch(error => Observable.throw(error.json().error) || "server Error");
  }

  addData(obj : Object) {
    let body = JSON.stringify(obj);
    let headers = new Headers({ "Content-Type":"application/json" });
    let options = new RequestOptions({ headers : headers });

    this.http.post('http://jsonplaceholder.typicode.com/users', body, options)
    .subscribe(result => console.log(result.json()));
  }
  // user:object[]=[ {
  //   "name":"Gustave H.", 
  //   "email":"concierge@grandbudapest.com", 
  //   "address":"Republic of Zubrowka", 
  //   "phoneNumber":4921801856, 
  //   "companyName":"The Grand Budapest Hotel"}
  // ]

}
