import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BaseComponent } from './contents/base/base.component';
import { TitleComponent } from './contents/title/title.component';
import { IntroComponent } from './contents/intro/intro.component';
import { CardsComponent } from './contents/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './contents/contact/contact.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseComponent,
    TitleComponent,
    IntroComponent,
    CardsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
