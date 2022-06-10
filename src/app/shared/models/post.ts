import { ICardType } from "./cardType";

export interface IPostsRq {
  posts: IPostAPI[];
}

export interface IPost {
  _id: string;
  reactionCounters?: IReactionCounterType;
  sign?: ISign;
  likesCount?: number;
  messageType?: IMessageType;
  messageData?: any;
  text?: string;
  date?: Date;
  feedName?: string;
  feedIcon?: string;
  // UI generated fields
  id?: string;
  dateSinceNowHM?: string;
  reactionCountersToShow?: string[];
  reactionsCount?: number;
  cardType: ICardType;
  priority?: number;
  signText?: string;
}

export interface IPostAPI {
  _id: string;
  reactionCounters?: IReactionCounterType;
  sign?: ISign;
  likesCount?: number;
  messageType?: IMessageType;
  messageData?: any;
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

export interface ISign {
  professionalTitle?: string;
  signType?: ISignType;
  companyDisplayName?: string;
  firstLastName?: IFirstLastName;
  username?: string;
  location: string;
}

interface IFirstLastName {
  firstName: string;
  lastName: string;
}

// TODO rename enum Title
// Names should be based on business logic intead of display functionality 
export enum ISignType {
  CompanyDisplayName = 0,
  Location = 1,
  Title = 2,
  CompanyDisplayName2 = 3,
  Username = 4,
  FirstAndLastNames = 5,
  Teacher = 6,
  Teacher2 = 7,
  DeactivatedUser = 8,
}

enum IMessageType {
  Text = 0,
  Photo = 1,
}