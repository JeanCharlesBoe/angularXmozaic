import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start/components/start-page/start-page.component';

const routes: Routes = [
  {path: 'identity', loadChildren: () => import('./identity/identity.module').then(m => m.IdentityModule)},
  {path: '', component: StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
