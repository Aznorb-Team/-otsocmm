import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification.component';

const routes: Routes = [
  {
    path: '',
    component: AuthentificationComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationRoutingModule {}
