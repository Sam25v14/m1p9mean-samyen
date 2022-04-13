import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardDesktopComponent } from './components/card-desktop/card-desktop.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetailsProductsComponent } from './components/details-products/details-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';
import { LoginInscriptionComponent } from './components/login-inscription/login-inscription.component';
import { MainDataComponent } from './components/main-data/main-data.component';
import { MainComponent } from './components/main/main.component';
import { ModalSocialComponent } from './components/modal-social/modal-social.component';
import { PromotionSectionComponent } from './components/promotion-section/promotion-section.component';
import { SocialComponent } from './components/social/social.component';
import { ChoixRestoComponent } from './components/choix-resto/choix-resto.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListePlatsComponent } from './pages/liste-plats/liste-plats.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PanierFixeComponent } from './components/panier-fixe/panier-fixe.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ImagekitioAngularModule } from 'imagekitio-angular';

@NgModule({
  declarations: [
    FrontComponent,
    HeaderNavbarComponent,
    CardsComponent,
    DetailsProductsComponent,
    LoginInscriptionComponent,
    ModalSocialComponent,
    BannerComponent,
    HeaderBannerComponent,
    PromotionSectionComponent,
    CardDesktopComponent,
    MainComponent,
    MainDataComponent,
    ListProduitComponent,
    SocialComponent,
    FooterComponent,
    ChoixRestoComponent,
    HomepageComponent,
    ListePlatsComponent,
    SideFilterComponent,
    PanierFixeComponent,
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    ImagekitioAngularModule,
    DragDropModule,
    InfiniteScrollModule,
    AngularSvgIconModule,
  ],
})
export class FrontModule {}
