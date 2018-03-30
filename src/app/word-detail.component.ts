import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from './Person';

@Component({
    template: `
    <p>WORD DETAIL</p>
    <p *ngIf="!person">Khong tim thay 404</p>
    <div *ngIf="person">
        <p>Name: {{ person.name }}</p>
        <p>Age: {{ person.age }}</p>
        <p>Height: {{ person.height }}</p>
    </div>
    `
})

export class WordDetailComponent {
    person: Person;
    constructor(private route: ActivatedRoute) {
        this.route.paramMap.subscribe(p => {
            this.person = Person.findPersonById(p.get('_id'));
        });
    }
}
