import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'alpha',component: AlphaComponent },
  { path: 'beta',component: BetaComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'gamma/:id', component: GammaComponent },
  { path: 'gamma', component: GammaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
