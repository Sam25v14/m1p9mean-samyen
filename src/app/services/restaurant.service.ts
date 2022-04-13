import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private apiService: ApiService) {}

    getPlats(resto: string, skip: number, offset: number) {
        return this.apiService
        .get(`restaurant/plats/${resto}?skip=${skip}&offset=${offset}`)
    }
}
