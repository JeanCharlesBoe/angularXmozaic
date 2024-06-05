import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewIdentityComponent} from './components/new-identity/new-identity.component'

const routes: Routes = [
  {path: '/identity', component: NewIdentityComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IdentityRoutingModule {}