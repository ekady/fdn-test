export interface IApiEditorChoice {
  editor: string;
  role: string;
  product: {
    name: string;
    rating: number;
    description: string;
    image: string;
  };
}

export interface IApiArticle {
  title: string;
  author: string;
  image: string;
  published_at: string;
}

export interface IApiReview {
  user: string;
  profile: string[];
  product: {
    image: string;
    name: string;
    desc: string;
  };
  star: number;
  comment: string;
}

export interface IApiResponse {
  "editor's choice": IApiEditorChoice[];
  'latest articles': IApiArticle[];
  'latest review': IApiReview[];
}
