import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListePlatsComponent } from './pages/liste-plats/liste-plats.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent },
      { path: 'liste-plats', component: ListePlatsComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule {}
