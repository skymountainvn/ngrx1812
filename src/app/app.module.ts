import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordFormComponent,
    WordFilterComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
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
