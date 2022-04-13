import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss'],
})
export class ListProduitComponent implements OnInit {
  plats: Array<any> = [];
  @Output() platsItemsEvent = new EventEmitter();
  public endLimit: number = 6;
  public skip: number = 0;
  resto: any;
  
  constructor(
    private clientService: ClientService,
    private restoService: RestaurantService,
    private _router: Router // private scrollService: InfiniteScrolling
  ) {}

  handleError(error: any) {
    console.log(error.error);
    return error;
  }

  handleSuccess(plats: any): void {
    this.plats = this.plats.concat(plats);
    this.skip += this.endLimit;

    this.platsItemsEvent.emit(this.plats);
  }

  onScrollDown(ev: any) {
    if (this.resto._id) {
      this.restoService
        .getPlats(this.resto._id, this.skip, this.endLimit)
        .pipe(catchError((error) => this.handleError(error)))
        .subscribe((data: any) => this.handleSuccess(data[0].plats));
    }
  }

  onScrollUp(ev: any) {
    // console.log('scrolled up!', ev);
  }

  ngOnInit() {
    this.resto = this.clientService.getResto();
    if (this.resto._id) {
      this.restoService
        .getPlats(this.resto._id, this.skip, this.endLimit)
        .pipe(catchError((error) => this.handleError(error)))
        .subscribe((data: any) => this.handleSuccess(data[0].plats));
    }
  }
}
