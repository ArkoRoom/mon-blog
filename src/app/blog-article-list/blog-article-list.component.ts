import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-article-list',
  templateUrl: './blog-article-list.component.html',
  styleUrls: ['./blog-article-list.component.scss']
})
export class BlogArticleListComponent implements OnInit {

  articles: Article[];
  articlesSubscription: Subscription;

  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit() {
    this.articlesSubscription = this.articlesService.articlesSubject.subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );
    this.articlesService.emitArticles();
  }

  onNewArticle() {
    this.router.navigate(['/articles', 'new']);
  }

  onDeleteArticle(article: Article) {
    this.articlesService.removeArticle(article);
  }

  addArticleLike(article: Article) {
    article.like++;
    this.articlesService.saveArticles();
  }

  addArticleDislike(article: Article) {
    article.dislike++;
    this.articlesService.saveArticles();
  }
}
