import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { WordFormComponent } from './word-form.component';

import { ParentComponent } from './output/parent.component';
import { ChildComponent } from './output/child.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordFormComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
