export interface Card {
  idNum: number;
  title: string;
  tag: string;
  liked: boolean;
  viewed: boolean;
  created_at: number;
  imgUrl: string | undefined;
}

export interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: number;
  imgUrl: string;
  correctRate: number;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  icon: string;
  url: string;
}
