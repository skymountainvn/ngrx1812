import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h4 [class]="wordInfo.isMemorized ? 'text-success' : 'text-danger'">
              {{ wordInfo.en }}
            </h4>
            <p>{{ wordInfo.vn }}</p>
            <button class="btn btn-danger">
              Remove
            </button>
            <button class="btn btn-success">
              Toggle
            </button>
        </div>
    `
})

export class WordComponent {
  @Input() wordInfo: any;
}
