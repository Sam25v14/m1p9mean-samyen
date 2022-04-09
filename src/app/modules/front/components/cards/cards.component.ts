import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  // @ViewChild('card')
  // card!: ElementRef<any>;
  // @ViewChild('imgbox')
  // imgbox!: ElementRef<any>;
  // @ViewChild('img')
  // img!: ElementRef<any>;
  // @ViewChild('content')
  // content!: ElementRef<any>;
  constructor() { }

  ngAfterViewInit(): void {
    // // this.card.nativeElement.addEventListener('click', () => {
    // //   this.card.nativeElement.style.color = "green";
    // //   this.imgbox.nativeElement.style.transition = "0.5 ease-in-out";
    // //   this.imgbox.nativeElement.style.transform = "translateY(-100px)";
    // //   this.img.nativeElement.style.transform = "translate(0px, -40px)";
    // //   this.content.nativeElement.style.opacity = "1";
    // //   this.content.nativeElement.style.visibility = "visible";
    // //   this.content.nativeElement.style.transition = "0.5s ease-in-out";
    // })
  }

  ngOnInit() {
  }

}
