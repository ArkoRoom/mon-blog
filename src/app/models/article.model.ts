export class Article {
  content: string;
  like: number;
  dislike: number;
  constructor(public title: string, public author: string, public date: Date) {
  }
}
