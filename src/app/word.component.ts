import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Word } from './types';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h4 [class]="wordInfo.isMemorized ? 'text-success' : 'text-danger'">
              {{ wordInfo.en }}
            </h4>
            <p>{{ wordInfo.vn }}</p>
            <button class="btn btn-danger" (click)="removeWord();">
              Remove
            </button>
            <button class="btn btn-success" (click)="toggleWord();">
              Toggle
            </button>
        </div>
    `
})

export class WordComponent {
  @Input() wordInfo: Word;

  constructor(private store: Store<AppState>){}

  removeWord() {
    this.store.dispatch({ type: 'REMOVE_WORD', _id: this.wordInfo._id });
  }

  toggleWord() {
    this.store.dispatch({ type: 'TOGGLE_WORD', _id: this.wordInfo._id });
  }
}
