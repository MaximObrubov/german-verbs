import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { VerbsService } from '../services/verbs.service';
import { SearchComponent } from './search/search.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FastNavComponent } from './fast-nav/fast-nav.component';



@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    ListPageComponent,
    FastNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListPageComponent,
  ],
  providers: [VerbsService]
})
export class VerbsModule { }
