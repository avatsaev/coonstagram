import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedService {

  constructor(private http: HttpClient) { }

  getFeed(): Observable<Post[]> {
    return this.http.get<Post[]>('/assets/posts.json').map(r => r['data']);
  }


}
