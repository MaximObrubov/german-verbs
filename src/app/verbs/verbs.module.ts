import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { VerbsService } from '../services/verbs.service';



@NgModule({
  declarations: [
    ListComponent
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
