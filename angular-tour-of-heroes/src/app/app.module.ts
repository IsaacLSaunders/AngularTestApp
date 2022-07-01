import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// ngModel must be opted into by importing FormsModule from angular/forms ==> used in heroes component for two way data binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
  //HeroesComponent was auto imported into the app module when we used the Angluar CLI to declare the component
  //When you use the CLI to create a component it auto imports to the parent component
  //it also auto adds HeroesComponent to the declarations array below 

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  //the imports array contains all external modules that the app needs
  imports: [
    BrowserModule,
    FormsModule,
    //Must add FormsModule to NgModule metadata
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
