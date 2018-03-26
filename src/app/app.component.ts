import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Word, AppState } from './types';
import 'rxjs/add/operator/combineLatest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  filteredWords: Observable<Word[]>;

  constructor(private store: Store<AppState>) {
    const $words = this.store.select('words')
    const $filterStatus = this.store.select('filterStatus');
    this.filteredWords = $words.combineLatest($filterStatus, (words, filterStatus) => {
      return words.filter(word => {
        if (filterStatus === 'SHOW_ALL') return true;
        if (filterStatus === 'SHOW_MEMORIZED') return word.isMemorized;
        return !word.isMemorized;
      });
    });
  }
}
