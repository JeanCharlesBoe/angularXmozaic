import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIdentityComponent } from './components/new-identity/new-identity.component';
import { SharedModule } from '../shared/shared.module';
import { IdentityRoutingModule } from './identity-routing.module';



@NgModule({
  declarations: [
    NewIdentityComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule
  ],
  exports: [
    NewIdentityComponent
  ]
})
export class IdentityModule { }
