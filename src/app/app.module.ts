import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { NavbarModule } from './navbar/navbar.module';
import { VerbsModule } from './verbs/verbs.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    VerbsModule,
    GameModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
