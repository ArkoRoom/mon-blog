import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../models/article.model';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-article-form',
  templateUrl: './blog-article-form.component.html',
  styleUrls: ['./blog-article-form.component.scss']
})
export class BlogArticleFormComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private articlesService: ArticlesService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      date: '',
      content: '',
      like: [0],
      dislike: [0]
    });
  }

  onSaveArticle() {
    const title = this.articleForm.get('title').value;
    const author = this.articleForm.get('author').value;
    const date = Date();
    const content = this.articleForm.get('content').value;
    const like = this.articleForm.get('like').value;
    const dislike = this.articleForm.get('dislike').value;
    const newArticle = new Article(title, author, date);
    newArticle.content = content;
    newArticle.like = like;
    newArticle.dislike = dislike;
    this.articlesService.createNewArticle(newArticle);
    this.router.navigate(['/articles']);
  }
}
