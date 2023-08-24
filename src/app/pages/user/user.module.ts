import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharePrimeModule } from 'src/app/cores/prime-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { MoleculeModule } from 'src/app/molecule/molecule.module';

const routes: Routes = [
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  }
]

@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent
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