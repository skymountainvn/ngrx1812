import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Store } from '@ngrx/store';
import { Word, AppState } from './types';

@Injectable()

export class WordService {
    constructor(private http: Http, private store: Store<AppState>) {}
    
    getTemp() {
        const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=Hanoi';
        return this.http.get(URL)
        .toPromise()
        .then(response => response.json())
        .then(resJson => console.log(resJson.main.temp));
    }

    getWords() {
        const URL = 'http://localhost:3000/word';
        return this.http.get(URL)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'SET_WORDS', words: resJson.words });
        });
    }
}
