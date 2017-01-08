import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hello-user',
    templateUrl: 'hello-user.component.html'
})
export class HelloUserComponent {
    @Input() name: string;

    constructor(){
        this.name = "Marou";
    }

}