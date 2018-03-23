import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success" (click)="increase();">Increase</button>
            <button class="btn btn-warning" (click)="descrease();">Descrease</button>
            <button class="btn btn-danger" (click)="reset();">Reset</button>
        </div>
    `
})

export class ChildComponent {
    @Output() onReset = new EventEmitter();
    @Output() onChange = new EventEmitter();

    increase() { this.onChange.emit(true); }
    descrease() { this.onChange.emit(false); }
    reset() { this.onReset.emit(); }
}
