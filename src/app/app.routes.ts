import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'loading',
    loadComponent: () => import('./loading/loading.page').then( m => m.LoadingPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cell-confirm',
    loadComponent: () => import('./cell-confirm/cell-confirm.page').then( m => m.CellConfirmPage)
  },
  {
    path: 'header',
    loadComponent: () => import('./header/header.page').then( m => m.HeaderPage)
  },
  {
    path: 'info',
    loadComponent: () => import('./info/info.page').then( m => m.InfoPage)
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.page').then( m => m.FormPage)
  },
  {
    path: 'contract',
    loadComponent: () => import('./contract/contract.page').then( m => m.ContractPage)
  },
];
