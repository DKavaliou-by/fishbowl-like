
export interface IPostsRq {
  posts: IPostAPI[];
}

export interface IPost {
  _id: string;
  reactionCounters?: IReactionCounterType;
  sign?: ISign;
  likesCount?: number;
  messageType?: IMessageType;
  text?: string;
  date?: Date;
  feedName?: string;
  feedIcon?: string;
  // UI generated fields
  id?: string;
  dateSinceNowHM?: string;
  reactionCountersToShow?: string[];
  reactionsCount?: number;
}

export interface IPostAPI {
  _id: string;
  reactionCounters?: IReactionCounterType;
  sign?: ISign;
  likesCount?: number;
  messageType?: IMessageType;
  text?: string;
  date?: string;
  feedName?: string;
  feedIcon?: string;
}


export interface IReactionCounterType {
  like?: number;
  helpful?: number;
  smart?: number;
  funny?: number;
  uplifting?: number;
}

interface ISign {
  professionalTitle?: string;
  signType?: ISignType;
}

enum ISignType {
  CompanyDisplayName = 0,
  Location = 1,
  Title = 2,
  // Based on test desc should be same with 0 type.
  // Commented for now
  // CompanyDisplayName = 3,
  Username = 4,
  FirstAndLastNames = 5,
  Teacher = 6,
  // Based on test desc should be same with 0 type.
  // Commented for now
  // Teacher = 7,
  DeactivatedUser = 8,
}

enum IMessageType {
  Text = 0,
  Photo = 1,
}