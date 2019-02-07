import { BaseService } from './../utils/baseService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Social from 'src/models/Social';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialService extends BaseService {

  constructor(http: HttpClient) {
    super('/social', http);
  }

  getSocials() {
    return this.getMany<Social>({}).pipe(map(r => r));
  }

}
