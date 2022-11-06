import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'german-verbs';

  links = [
    {url: "game", title: "Match Game"},
    // {url: "/irregular", title: "Irregular verbs"},
  ]

  constructor(private title: Title) {
    this.setTitle("German Verbs with prepositions")
  }

  public setTitle(title: string) {
    this.title.setTitle(title);
  }
}
