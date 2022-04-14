import { Injectable } from '@angular/core';

const RESTO_KEY = 'RESTO';

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
    const resto = window.sessionStorage.getItem(RESTO_KEY);
    if (resto) {
      return JSON.parse(resto);
    }
    return {};
  }
}
