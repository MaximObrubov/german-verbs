import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'scroll-top-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  // pageYOffset!: number;

  isShown: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    // this.pageYOffset = window.pageYOffset;
    this.isShown = window.pageYOffset > 0;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

}
