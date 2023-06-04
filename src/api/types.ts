export interface IItem {
  id: string;
  name: string;
  description: string;
  details: string;
  like: boolean;
  picture: IPicture;
  price: IPrice;
}

export interface IPicture {
  path: string;
  alt: string;
}

export interface IPrice {
  value: number;
  currency: string;
}
