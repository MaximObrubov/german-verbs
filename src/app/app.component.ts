import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'german-verbs';

  links = [
    {url: "/game", title: "Match Game"},
    // {url: "/irregular", title: "Irregular verbs"},
  ]
}
