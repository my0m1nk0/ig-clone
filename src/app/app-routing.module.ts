import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authUserGuard } from './auths/auth-user.guard';

const routes: Routes = [
  {
    path: "user",
    loadChildren: () => import("./pages/user/user.module").then((m) => m.UserModule)
  },
  {
    path: 'home',
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule),
    canActivate: [authUserGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
