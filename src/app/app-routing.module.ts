import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game/game-page/game-page.component';
import { IrregularPageComponent } from './verbs/irregular-page/irregular-page.component';
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
  {
    path: 'irregular',
    component: IrregularPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
