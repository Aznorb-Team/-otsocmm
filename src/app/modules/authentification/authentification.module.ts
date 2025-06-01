import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationComponent } from './authentification.component';
import { AuthentificationRoutingModule } from './authentification.routing';

@NgModule({
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    AuthentificationComponent
  ],
  exports: [AuthentificationComponent]
})
export class AuthentificationModule { }
