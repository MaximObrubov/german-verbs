import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './game-page/game-page.component';
import { RadioGroupComponent } from './game-page/radio-group/radio-group.component';
import { StatisticsComponent } from './game-page/statistics/statistics.component';



@NgModule({
  declarations: [
    GamePageComponent,
    RadioGroupComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GamePageComponent
  ]
})
export class GameModule { }
