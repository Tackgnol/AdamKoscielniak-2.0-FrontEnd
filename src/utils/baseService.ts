import { Http, Request, RequestMethod, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

class BaseService {
  constructor(public http: Http) {}
  get<T>(
    url: string,
    auth: { accessToken: string; refreshToken: string },
    headers: {},
    queryString: {}
  ) {
    const header = new Headers({
      Authentication: 'Bearer ' + auth.accessToken,
      refresh: 'Bearer ' + auth.refreshToken
    });
    let searchParams: string;
    for (const key in queryString) {
      if (Object.hasOwnProperty(key)) {
        const element = queryString[key];
        searchParams = searchParams + '&' + key + '=' + element;
      }
    }
    for (const key in headers) {
      if (Object.hasOwnProperty(key)) {
        const element = headers[key];
        header.append(key, element);
      }
    }
    this.http.request(
      new Request({
        method: RequestMethod.Get,
        url: url,
        headers: header,
        search: searchParams
      })
    );
  }
}
