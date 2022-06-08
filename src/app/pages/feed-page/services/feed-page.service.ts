import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPostsRq } from 'src/app/shared/models/post';
import { environment } from 'src/environments/environment';

@Injectable()
export class FeedPageService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getPosts(
    count: number = 20, 
    start: number = 0,
  ): Observable<IPostsRq>{
    return this._httpClient.get<IPostsRq>(
      `${environment.API_URL}/v4/feed/consolidated/posts`,
      {
        headers: {
          'session-key': environment.API_SESSION_KEY,
        },
        params: {
          count,
          start,
        }
      }
    )
  }
}
