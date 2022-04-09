import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit() {
  }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
