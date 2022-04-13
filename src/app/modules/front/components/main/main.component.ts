import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  plats: Array<any> = [];

  constructor() {}

  ngOnInit() {}

  updatePlats(plats: Array<any>) {
    this.plats = plats;
  }
}
