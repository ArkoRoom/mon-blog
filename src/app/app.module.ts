import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogArticleListComponent } from './blog-article-list/blog-article-list.component';
import { BlogArticleFormComponent } from './blog-article-form/blog-article-form.component';
import { HeaderComponent } from './header/header.component';

import { ArticlesService } from './services/articles.service';

const appRoutes: Routes = [
  { path: 'articles', component: BlogArticleListComponent },
  { path: 'new', component: BlogArticleFormComponent },
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: '**', redirectTo: 'articles' }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogArticleListComponent,
    BlogArticleFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
