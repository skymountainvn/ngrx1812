import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Word, AppState } from './types';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  words: Word[];
  filterStatus: string;
  constructor(private store: Store<AppState>, private http: Http) {
    this.store.select('words')
    .subscribe(words => this.words = words);
  
    this.store.select('filterStatus')
    .subscribe(filterStatus => this.filterStatus = filterStatus);

    this.getTemp();
  }

  get filteredWords(): Word[] {
    return this.words.filter(word => {
      if (this.filterStatus === 'SHOW_ALL') return true;
      if (this.filterStatus === 'SHOW_FORGOT') return !word.isMemorized;
      return word.isMemorized;
    });
  }

  getTemp() {
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=Hanoi';
    this.http.get(URL)
    .toPromise()
    .then(response => response.json())
    .then(resJson => console.log(resJson));
  }
}
