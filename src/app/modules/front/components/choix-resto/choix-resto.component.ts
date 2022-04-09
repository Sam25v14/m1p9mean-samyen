import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-choix-resto',
  templateUrl: './choix-resto.component.html',
  styleUrls: ['./choix-resto.component.scss'],
})
export class ChoixRestoComponent implements OnInit {
  restaurants: Array<any> = [];

  constructor(
    private apiService: ApiService,
    private clientService: ClientService,
    private _router: Router
  ) {
    apiService.baseRoute = 'restaurant';
  }

  handleError(error: any) {
    console.log(error.error);
    return error;
  }

  handleSuccess(restaurants: any): void {
    this.restaurants = restaurants;
  }

  ngOnInit(): void {
    this.apiService
      .get('/all')
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe((data) => this.handleSuccess(data));
  }

  changerResto(resto: any): void {
    if (resto) this.clientService.changerResto(resto);
    this._router.navigate(['/client/liste-plats']);
  }
}
