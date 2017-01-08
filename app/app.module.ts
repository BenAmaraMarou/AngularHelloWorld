import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { HelloUserComponent} from './hello-user.component';
import { GreetingUsersComponent } from './greetingusers.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HelloWorldComponent, HelloUserComponent, GreetingUsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
