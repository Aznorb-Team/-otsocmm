import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", loadChildren: () => import('./modules/authentification/authentification.module').then((m) => m.AuthentificationModule),
    data: {
      breadcrumb: 'auth',
    },
  },
  {
    path: "**", loadChildren: () => import('./modules/authentification/authentification.module').then((m) => m.AuthentificationModule),
    data: {
      breadcrumb: 'auth',
    },
  }
];
