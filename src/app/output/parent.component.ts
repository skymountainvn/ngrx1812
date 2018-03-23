import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <h3>Count = {{ count }}</h3>
            <app-child
                (onChange)="onChange($event)"
                (onReset)="onReset();"
            ></app-child>
        </div>
    `
})

export class ParentComponent {
    count = 1;
    onChange(isIncrease: boolean) {
        isIncrease ? this.count++ : this.count--;
    }
    onReset() { this.count = 0; }
}
