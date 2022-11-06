import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor(private meta: Meta) {
  }

  ngOnInit(): void {
    this.meta.addTags([
      {name: "description", content: "German verbs with prepositions | Deutsche Verben mit Präpositionen"},
      {name: "keywords", content: "Deutsch, German, language, Verbs list, Verbs, Verben, Verbs with prepositions"},
      {name: "robots", content: "index, follow"},
    ]);
  }

}
