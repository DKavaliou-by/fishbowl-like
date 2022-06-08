import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { IPost } from "src/app/shared/models/post";

export const PostsActions = {
  getPostsRq: createAction(
    '[Feed Page] Get Posts Request',
    props<{count: number, start: number}>()
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

