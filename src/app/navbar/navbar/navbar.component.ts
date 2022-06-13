import { Component, Input, OnInit } from '@angular/core';

interface Link {
  url: string,
  title: string,
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() links: Array<Link> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
