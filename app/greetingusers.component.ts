import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'greetingusers',
    templateUrl: 'greetingusers.component.html'
})
export class GreetingUsersComponent {
    names: string[];

    constructor(){
        this.names = ['A', 'B'];
    }
}