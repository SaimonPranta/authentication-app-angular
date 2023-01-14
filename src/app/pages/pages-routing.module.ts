import { UserGuardGuard } from './../guard/user-guard.guard';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
        data: {preload: true, delay: false}
      },
      {
        path: "registration",
        loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationModule),
        data: {preload: true, delay: false}
      },
      {
        path: "login",
        loadChildren: () => import('./login/login.module').then( m => m.LoginModule),
        data: {preload: true, delay: false}
      },
      {
        path: "dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashbordModule),
        data: {preload: true, delay: false},
        canActivate: [UserGuardGuard]
      },
      {
        path: "product/:id",
        loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductModule),
        data: {preload: true, delay: false}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
