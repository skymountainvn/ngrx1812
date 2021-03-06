import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { WordFormComponent } from './word-form.component';
import { WordFilterComponent } from './word-filter.component';

import { shouldShowFormReducer } from './ngrx/shouldShowFormReducer';
import { filterStatusReducer } from './ngrx/filterStatusReducer';
import { wordsReducer } from './ngrx/wordsReducer';

import { WordService } from './word.service';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

// screens
import { WordListComponent } from './word-list.component';
import { WordDetailComponent } from './word-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: WordListComponent },
  { path: 'detail/:_id', component: WordDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordFormComponent,
    WordFilterComponent,
    SignInFormComponent,
    SignUpFormComponent,
    WordListComponent,
    WordDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesConfig),
    StoreModule.forRoot({
      shouldShowForm: shouldShowFormReducer,
      words: wordsReducer,
      filterStatus: filterStatusReducer
    })
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})

export class AppModule { }
