import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    console.log(window.location.hash);
    // if(window.location.hash) this.scrollTo(window.location.hash.substring(1));
  } 

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
