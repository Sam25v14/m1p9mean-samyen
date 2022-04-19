import { Injectable } from '@angular/core';

const COMM_KEY = 'COMMANDE';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private _commande: any = { plats: [] };

  constructor() {
    const lastCommande = this.getLastCommande();
    if(lastCommande) this._commande = lastCommande;
  }

  public save(): void {
    window.localStorage.removeItem(COMM_KEY);
    window.localStorage.setItem(COMM_KEY, JSON.stringify(this.commande));
  }

  public getLastCommande(): any {
    const commande = window.localStorage.getItem(COMM_KEY);
    if (commande) {
      return JSON.parse(commande);
    }
    return undefined;
  }

  public get commande() {
    return this._commande;
  }

  public doAction(fn: Function, ...args: any[]) {
    if(fn) fn(...args);
    this.save();
  }

  public ajouterAuPanier(item: any) {
    const platEnCommande = this._commande.plats.filter(
      (data: any) => item._id === data.plat._id
    );
    if (platEnCommande?.length > 0) {
      platEnCommande[0].quantite += 1;
    } else this._commande.plats.push({ plat: item, quantite: 1 });

    this.save();
  }
}
