import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AdminModule } from './modules/admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontModule } from './modules/front/front.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { environment } from 'src/environments/environment';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // FooterComponent,
    // NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImagekitioAngularModule.forRoot({
      publicKey: environment.publicKey,
      urlEndpoint: environment.urlEndpoint,
      authenticationEndpoint: environment.authenticationEndpoint
    }),
    AngularSvgIconModule.forRoot(),
    FormsModule,
    DragDropModule,
    InfiniteScrollModule,
    AdminModule,
    FrontModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far, fas);
  }
}
