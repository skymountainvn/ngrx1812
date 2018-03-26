import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Word, AppState } from './types';

@Component({
    selector: 'app-word-filter',
    template: `
        <select
            class="form-control"
            style="width: 200px"
            value="{{ filterStatus | async }}"
        >
            <option value="SHOW_ALL">SHOW ALL</option>
            <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
            <option value="SHOW_FORGOT">SHOW FORGOT</option>
        </select>
    `
})

export class WordFilterComponent {
    filterStatus: Observable<string>;
    constructor(private store: Store<AppState>) {
        this.filterStatus = this.store.select('filterStatus');
    }
}
