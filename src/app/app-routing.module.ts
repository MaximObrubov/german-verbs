import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game/game-page/game-page.component';
import { ListPageComponent } from './verbs/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
