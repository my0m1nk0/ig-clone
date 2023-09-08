import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharePrimeModule } from 'src/app/cores/prime-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { MoleculeModule } from 'src/app/molecule/molecule.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { authUserGuard } from 'src/app/auths/auth-user.guard';

const routes: Routes = [
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [authUserGuard],
  }
]

@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharePrimeModule,
    MoleculeModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
