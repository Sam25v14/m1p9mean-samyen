import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-panier-fixe',
  templateUrl: './panier-fixe.component.html',
  styleUrls: ['./panier-fixe.component.scss'],
})
export class PanierFixeComponent implements OnInit {
  @Input() commande: any = {
    plats: [],
  };

  @Input() plats: Array<any> = [];

  constructor(
    private commandeService: CommandeService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.commande = this.commandeService.commande;
  }

  enlever(item: any) {
    this.commandeService.doAction((data: any) => {
      if (data.quantite > 1) {
        data.quantite -= 1;
      }
    }, item);
  }

  effacer() {
    this.commandeService.doAction(() => this.commande.plats = []);
  }

  calculTotal() {
    return this.commande.plats.reduce(
      (sum: number, item: any) => sum + item.quantite * item.plat.prix,
      0
    );
  }

  remove(item: any) {
    this.commande.plats = this.commande.plats.filter(
      (data: any) => data !== item
    );
  }

  ajouter(item: any) {
    item.quantite += 1;
  }

  drop(event: CdkDragDrop<string[]>) {
    // copyArrayItem(this.plats, this.commandes, event.previousIndex, event.currentIndex);

    const item = this.plats[event.previousIndex];

    this.commandeService.ajouterAuPanier(item);
  }
}
