import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// ngModel must be opted into by importing FormsModule from angular/forms ==> used in heroes component for two way data binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
  //HeroesComponent was auto imported into the app module when we used the Angluar CLI to declare the component
  //When you use the CLI to create a component it auto imports to the parent component
  //it also auto adds HeroesComponent to the declarations array below 

  import { HttpClientModule } from '@angular/common/http';
  import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
  import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  //the imports array contains all external modules that the app needs
  imports: [
    BrowserModule,
    FormsModule,
    //Must add FormsModule to NgModule metadata
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
