import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { DallasComponent } from './dallas/dallas.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'seattle',component: AlphaComponent },
  { path: 'sanjose',component: BetaComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'burbank', component: GammaComponent },
  { path: 'dallas', component: DallasComponent },
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
