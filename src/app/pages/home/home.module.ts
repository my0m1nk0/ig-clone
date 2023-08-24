import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MoleculeModule } from 'src/app/molecule/molecule.module';
import { AtomModule } from 'src/app/atoms/atom.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AtomModule,
    MoleculeModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
