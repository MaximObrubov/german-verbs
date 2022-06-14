import { Component, OnInit } from '@angular/core';
import { VerbWithPrepostion } from 'src/app/services/verb';
import { VerbsService } from 'src/app/services/verbs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public verbs: {[key: string]: Array<VerbWithPrepostion>}

  constructor(private vs: VerbsService) {
    this.verbs = this.vs.sortedByPreposition();
  }

  ngOnInit(): void {
  }

  get prepositions() {
    return this.vs.sortedPrepositions();
  }

}
