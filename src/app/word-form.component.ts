import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './types';

@Component({
    selector: 'app-word-form',
    template: `
    <div class="form-group" style="width: 200px">
        <button
          class="btn btn-success form-control"
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
          >
            Add word
          </button>
          <br>
          <br>
          <button
            class="btn btn-danger form-control"
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
}
