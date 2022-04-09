import { Injectable } from '@angular/core';

const RESTO_KEY = 'RESTO';
const TOKEN_KEY = 'ACCESS_TOKEN';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  public changerResto(resto: any): void {
    window.sessionStorage.removeItem(RESTO_KEY);
    window.sessionStorage.setItem(RESTO_KEY, JSON.stringify(resto));
  }

  public getResto(): any {
    const user = window.sessionStorage.getItem(RESTO_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
