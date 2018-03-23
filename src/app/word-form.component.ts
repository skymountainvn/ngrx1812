import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, Word } from './types';

@Component({
    selector: 'app-word-form',
    template: `
    <div class="form-group" style="width: 200px">
        <button
          class="btn btn-success form-control"
          (click)="showForm();"
          *ngIf="!(shouldShowForm | async)"
        >
          Add word
        </button>
        <div *ngIf="shouldShowForm | async">
          <input class="form-control" placeholder="English" [(ngModel)]="txtEn">
          <br>
          <input class="form-control" placeholder="Vietnamese" [(ngModel)]="txtVn">
          <br>
          <button
            class="btn btn-success form-control"
            (click)="addWord();"
          >
            Add word
          </button>
          <br>
          <br>
          <button
            class="btn btn-danger form-control"
            (click)="hideForm();"
          >
            Cancel
          </button>
        </div>
        <br>
      </div>
    `
})

export class WordFormComponent {
  shouldShowForm: Observable<boolean>;
  
  constructor(private store: Store<AppState>){
    this.shouldShowForm = this.store.select('shouldShowForm');
  }
  
  txtEn = '';
  txtVn = '';
  showForm() { this.store.dispatch({ type: 'SHOW_FORM' }); }
  hideForm() { this.store.dispatch({ type: 'HIDE_FORM' }); }

  addWord() {
    const { txtEn, txtVn } = this;
    const word: Word = {
      _id: Math.random() + '',
      en: txtEn,
      vn: txtVn,
      isMemorized: false
    };
    this.store.dispatch({ type: 'ADD_WORD', word });
    this.txtEn = '';
    this.txtVn = '';
  }
}
