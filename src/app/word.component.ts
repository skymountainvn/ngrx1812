import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Word } from './types';
import { WordService } from './word.service';

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

  constructor(private store: Store<AppState>, private wordService: WordService){}

  removeWord() {
    this.wordService.removeWord(this.wordInfo._id);
  }

  toggleWord() {
    this.wordService.toggleWord(this.wordInfo._id, !this.wordInfo.isMemorized);
  }
}
