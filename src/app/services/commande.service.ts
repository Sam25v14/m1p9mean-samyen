import { Injectable } from '@angular/core';

const COMM_KEY = 'COMMANDE';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  constructor() {}

  public save(commande: any): void {
    window.localStorage.removeItem(COMM_KEY);
    window.localStorage.setItem(COMM_KEY, JSON.stringify(commande));
  }

  public getCommandeEnCours(): any {
    const commande = window.sessionStorage.getItem(COMM_KEY);
    if (commande) {
      return JSON.parse(commande);
    }
    return {};
  }

  public ajouterPanier(item: any) {
    let commande = this.getCommandeEnCours();
    
    if(!commande) {
      commande = {
        plats: []
      };
    }

    
  }
}
