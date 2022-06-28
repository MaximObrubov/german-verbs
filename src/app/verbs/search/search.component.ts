import { Component, OnInit } from '@angular/core';
import { VerbWithPrepostion } from 'src/app/services/verb';
import { VerbsService } from 'src/app/services/verbs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: Array<VerbWithPrepostion> | null = null;

  constructor(private vs: VerbsService) { }

  ngOnInit(): void {
  }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;

    if (target && target.value && target.value.length > 2) {
      this.results = this.vs.find(target.value);
    } else {
      this.results = null;
    }
  }

  // TODO: remove duplicated method in list component
  decode(v: VerbWithPrepostion) {
    return btoa(encodeURIComponent(JSON.stringify(v)));
  }
}
