import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { VerbsService } from '../services/verbs.service';
import { SearchComponent } from './search/search.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FastNavComponent } from './fast-nav/fast-nav.component';
import { DetailsComponent } from './details/details.component';
import { GifsService } from '../services/gifs.service';
import { AudioModule } from '../audio/audio.module';



@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    ListPageComponent,
    FastNavComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AudioModule,
  ],
  exports: [
    ListPageComponent,
  ],
  providers: [VerbsService, GifsService]
})
export class VerbsModule { }
