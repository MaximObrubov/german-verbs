import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './game-page/game-page.component';
import { RadioGroupComponent } from './game-page/radio-group/radio-group.component';



@NgModule({
  declarations: [
    GamePageComponent,
    RadioGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GamePageComponent
  ]
})
export class GameModule { }
