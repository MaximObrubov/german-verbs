import { Component, OnInit } from '@angular/core';
import { VerbWithPrepostion } from 'src/app/services/verb';
import { VerbsService } from 'src/app/services/verbs.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  VERBS_COUNT = 6;
  verbs: Array<string>;
  prepostions: Array<string>;
  cassen: Array<string>;
  meanings: Array<string>;

  constructor(private vs: VerbsService) {
    const verbs = this.vs.random(this.VERBS_COUNT);
    this.verbs = verbs.map(v => v.verb);
    this.prepostions = verbs.map(v => v.preposition);
    this.meanings = verbs.map(v => v.meaning);
    this.cassen = verbs.map(v => v.casus);
   }

  ngOnInit(): void {
  }
  

}
