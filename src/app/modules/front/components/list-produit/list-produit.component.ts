import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss'],
})
export class ListProduitComponent implements OnInit {
  plats: Array<any> = [];

  constructor(
    private clientService: ClientService,
    private apiService: ApiService,
    private _router: Router
  ) {}

  handleError(error: any) {
    console.log(error.error);
    return error;
  }

  handleSuccess(plats: any): void {
    console.log(plats);
    this.plats = plats;
  }

  ngOnInit() {
    const resto = this.clientService.getResto();
    // if (resto._id) {
      this.apiService
        .get(`restaurant/plats?resto=${resto._id}`)
        .pipe(catchError((error) => this.handleError(error)))
        .subscribe((data: any) => this.handleSuccess(data[0].plats));
    // }
  }
}
