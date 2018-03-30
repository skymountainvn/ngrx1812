import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Word, AppState } from './types';

import { WordService } from './word.service';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  words: Word[];
  filterStatus: string;
  people = Person.people;
  constructor(
    private store: Store<AppState>,
    private wordService: WordService
  ) {
    this.store.select('words')
    .subscribe(words => this.words = words);
  
    this.store.select('filterStatus')
    .subscribe(filterStatus => this.filterStatus = filterStatus);

    // this.wordService.getWords();
  }

  get filteredWords(): Word[] {
    return this.words.filter(word => {
      if (this.filterStatus === 'SHOW_ALL') return true;
      if (this.filterStatus === 'SHOW_FORGOT') return !word.isMemorized;
      return word.isMemorized;
    });
  }
}
