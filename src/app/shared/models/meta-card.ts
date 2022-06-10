import { ICardType } from "./cardType";

export interface IMetaCard extends IMetaCardAPI{
  // UI generated fields
  id?: string;
}

export interface IMetaCardAPI {
  _id: string;
  type?: number;
  position?: number;
  content?: any;
  priority: number;
  cardType: ICardType;
}

export interface IMetaRq {
  cards: IMetaCardAPI[];
}