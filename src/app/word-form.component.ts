import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
    <div class="form-group" style="width: 200px">
        <button
          class="btn btn-success form-control"
        >
          Add word
        </button>
        <div>
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
  isShowForm = false;
  txtEn = '';
  txtVn = '';
}
