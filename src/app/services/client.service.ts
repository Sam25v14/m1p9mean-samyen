import { Injectable } from '@angular/core';

const RESTO_KEY = 'RESTO';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  public changerResto(resto: any): void {
    window.localStorage.removeItem(RESTO_KEY);
    window.localStorage.setItem(RESTO_KEY, JSON.stringify(resto));
  }

  public getResto(): any {
    const resto = window.localStorage.getItem(RESTO_KEY);
    if (resto) {
      return JSON.parse(resto);
    }
    return {};
  }
}
