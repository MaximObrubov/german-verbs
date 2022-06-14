import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { VerbsService } from '../services/verbs.service';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ],
  providers: [VerbsService]
})
export class VerbsModule { }
