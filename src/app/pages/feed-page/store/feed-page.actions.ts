import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { IMetaCard } from "src/app/shared/models/meta-card";
import { IPost } from "src/app/shared/models/post";

export const PostsActions = {
  getPostsRq: createAction(
    '[Feed Page] Get Posts Request',
    props<{count: number, init: boolean}>()
  ),
  getPostsSs: createAction(
    '[Feed Page] Get Posts Success',
    props<{posts: IPost[]}>()
  ),
  getPostsEr: createAction(
    '[Feed Page] Get Posts Error',
    props<{error: HttpErrorResponse}>()
  ),
};


export const MetaCardsActions = {
  getMetaCardsRq: createAction(
    '[Feed Page] Get Meta Cards Request',
  ),
  getMetaCardsSs: createAction(
    '[Feed Page] Get Meta Cards Success',
    props<{metaCards: IMetaCard[]}>()
  ),
  getMetaCardsEr: createAction(
    '[Feed Page] Get Meta Cards Error',
    props<{error: HttpErrorResponse}>()
  ),
};

