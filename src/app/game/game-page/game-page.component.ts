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

  verbs: Array<VerbWithPrepostion>;

  constructor(private vs: VerbsService) {
    this.verbs = this.vs.random(this.VERBS_COUNT);



   }

  ngOnInit(): void {
  }

}
