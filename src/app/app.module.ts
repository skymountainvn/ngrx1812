import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { WordFormComponent } from './word-form.component';
import { WordFilterComponent } from './word-filter.component';

import { shouldShowFormReducer } from './ngrx/shouldShowFormReducer';
import { filterStatusReducer } from './ngrx/filterStatusReducer';
import { wordsReducer } from './ngrx/wordsReducer';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordFormComponent,
    WordFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      shouldShowForm: shouldShowFormReducer,
      words: wordsReducer,
      filterStatus: filterStatusReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
