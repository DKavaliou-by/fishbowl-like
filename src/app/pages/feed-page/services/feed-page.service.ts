import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPost, IPostsRq, ISign, ISignType } from 'src/app/shared/models/post';
import { environment } from 'src/environments/environment';
import { IMetaCard, IMetaRq } from 'src/app/shared/models/meta-card';
import { ICardType } from 'src/app/shared/models/cardType';

// TODO Move to utils
const getSignText = (sign: ISign): string => {
  switch (sign.signType) {
    case ISignType.CompanyDisplayName:
    case ISignType.CompanyDisplayName2: {
      return `working at ${sign.companyDisplayName}`
    }
    case ISignType.Location: {
      // TODO Find where to get location
      return `located at ${sign.location}`
    }
    case ISignType.Title: {
      return `a ${sign.professionalTitle}`
    }
    case ISignType.Username: {
      // TODO Find where to get Username
      return `${sign.username}`
    }
    case ISignType.FirstAndLastNames: {
      return `${sign?.firstLastName?.firstName} ${sign?.firstLastName?.lastName}`
    }
    case ISignType.Teacher: 
    case ISignType.Teacher2: {
      return `Teacher`

    }
    case ISignType.DeactivatedUser: {
      return `Deactivated user`
    }
    default: {
      return '';
    }
  }
}

@Injectable()
export class FeedPageService {
  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getPosts(
    count: number = 20, 
    start: number = 0,
  ): Observable<IPost[]>{
    return this._httpClient.get<IPostsRq>(
      `${environment.API_URL}/v4/feed/consolidated/posts`,
      {
        //TODO move auth into interceptor
        headers: {
          'session-key': environment.API_SESSION_KEY,
        },
        params: {
          count,
          start,
        }
      }
    ).pipe(
      map(this._mapPosts),
    )
  }
  
  // TODO Add Meta card mapper
  public getMeta(): Observable<IMetaCard[]> {
    return this._httpClient.get<IMetaRq>(
      `${environment.API_URL}/v4/feed/consolidated/meta`,
      {
        //TODO move auth into interceptor
        headers: {
          'session-key': environment.API_SESSION_KEY,
        },
      }
    ).pipe(
      map(this._mapMetaCards),
    )
  }

  private _mapPosts(rq: IPostsRq): IPost[] {
    return rq.posts.map(post => {
      return {
        ...post,
        id: post._id,
        date: post.date ? new Date(post.date) : undefined,
        cardType: ICardType.Post,
        signText: post?.sign ? getSignText(post?.sign) : '',
      }
    })
  }

  private _mapMetaCards(rq: IMetaRq): IMetaCard[] {
    return rq.cards.map(card => {
      return {
        ...card,
        id: card._id,
        cardType: ICardType.Meta,
        priority: card.position || 0,
      }
    })
  }
}
