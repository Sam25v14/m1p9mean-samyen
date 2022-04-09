import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-choix-resto',
  templateUrl: './choix-resto.component.html',
  styleUrls: ['./choix-resto.component.scss'],
})
export class ChoixRestoComponent implements OnInit {
  restaurants: Array<any> = [];

  constructor(private apiService: ApiService) {
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
}
