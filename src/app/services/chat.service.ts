import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ChatService {

  private baseURL = 'http://10.215.99.112:8008/api/v1';
  private baseURL1 = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: string = environment.token;

  constructor(private http: Http) { }

  public getResponse(query: string): Observable<any> {
    const data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http
      .post(`${this.baseURL}/query`, data, { headers: this.getHeaders() })
      .map(res => {
        return res.json();
      });
  }

  public getHeaders() {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
