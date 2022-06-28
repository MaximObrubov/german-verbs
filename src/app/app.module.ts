import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { NavbarModule } from './navbar/navbar.module';
import { VerbsModule } from './verbs/verbs.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollTopModule } from './scroll-top/scroll-top.module';

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
    ScrollTopModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
