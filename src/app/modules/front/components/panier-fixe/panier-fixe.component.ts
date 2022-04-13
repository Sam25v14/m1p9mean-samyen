import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier-fixe',
  templateUrl: './panier-fixe.component.html',
  styleUrls: ['./panier-fixe.component.scss'],
})
export class PanierFixeComponent implements OnInit {
  commande: any = {
    plats: [],
  };

  @Input() plats: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  enlever(item: any) {
    if (item.quantite > 1) {
      item.quantite -= 1;
    }
  }

  remove(item: any) {
    this.commande.plats = this.commande.plats.filter((data: any) => data !== item);
  }

  ajouter(item: any) {
    item.quantite += 1;
  }

  drop(event: CdkDragDrop<string[]>) {
    // copyArrayItem(this.plats, this.commandes, event.previousIndex, event.currentIndex);

    const item = { plat: this.plats[event.previousIndex], quantite: 1 };
    const enCommande = this.commande.plats.filter(
      (data: any) => data.plat._id === item.plat._id
    );
    if (enCommande.length > 0) {
      enCommande[0].quantite += 1;
    } else {
      this.commande.plats.push(item);
    }
  }
}
