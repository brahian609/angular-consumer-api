import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  API_URL: String;
  token: string;

  constructor(private http: Http) {
    this.API_URL = 'http://localhost:5000/api/v1';
    this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwibmFtZSI6ImFkbWluaXN0cmFkb3IiLCJleHAiOjE1MDMxNTM1ODksImlhdCI6MTUwMzA2NzE4OX0.OzMDr9SAdc1fQUQ_-qw_RzjeAgfF5XP-yOTi0V7IU08';
  }

  getItems(): Observable<any[]> {
    let headers = new Headers({ 'Authorization': `Bearer ${this.token}` });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.API_URL}/items/`, options)
      .map((response: Response) => response.json().data)
      .catch(this.handleError);
  }

  getItemById(id: number): Observable<any[]> {
    let headers = new Headers({ 'Authorization': `Bearer ${this.token}` });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.API_URL}/items/${id}`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  createItem(data: any): Observable<any> {
    let headers = new Headers({ 'Authorization': `Bearer ${this.token}` });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.API_URL}/items/`, { data }, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  updateItem(data: any): Observable<any> {
    let headers = new Headers({ 'Authorization': `Bearer ${this.token}` });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.API_URL}/items/${data.itemId}`, { data }, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteItem(id: number): Observable<any[]> {
    let headers = new Headers({ 'Authorization': `Bearer ${this.token}` });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`${this.API_URL}/items/${id}`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
