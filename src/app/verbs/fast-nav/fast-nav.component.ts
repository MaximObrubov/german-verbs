import { Component, OnInit } from '@angular/core';
import { VerbsService } from 'src/app/services/verbs.service';

@Component({
  selector: 'app-fast-nav',
  templateUrl: './fast-nav.component.html',
  styleUrls: ['./fast-nav.component.scss']
})
export class FastNavComponent implements OnInit {

  prepositions: string[];

  constructor(private vs: VerbsService) {
    this.prepositions = this.vs.sortedPrepositions();
   }

  ngOnInit(): void {
  }

}
