import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from '../models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class ArticlesService {

  constructor(private route: ActivatedRoute) {
    this.getArticles();
  }

  articles: Article[] = [];
  articlesSubject = new Subject<Article[]>();

  emitArticles() {
    this.articlesSubject.next(this.articles);
  }

  saveArticles() {
    firebase.database().ref('/articles').set(this.articles);
  }

  getArticles() {
    firebase.database().ref('/articles')
      .on('value', (data: DataSnapshot) => {
        this.articles = data.val() ? data.val() : [];
        this.emitArticles();
      }
    );
  }

  createNewArticle(newArticle: Article) {
    this.articles.push(newArticle);
    this.saveArticles();
    this.emitArticles();
  }

  removeArticle(article: Article) {
    const articleIndexToRemove = this.articles.findIndex(
      (articleEl) => {
        if(articleEl === article) {
          return true;
        }
      }
    );
    this.articles.splice(articleIndexToRemove, 1);
    this.saveArticles();
    this.emitArticles();
  }
}
