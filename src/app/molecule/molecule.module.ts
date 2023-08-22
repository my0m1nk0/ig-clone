import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './ads-list/ads-list.component';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { StorysComponent } from './storys/storys.component';
import { SharePrimeModule } from '../cores/prime-shared.module';
import { AtomModule } from '../atoms/atom.module';

const COMPONENTS = [
  AdsListComponent,
  FriendsComponent,
  HeaderComponent,
  PostsComponent,
  StorysComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    AtomModule,
    SharePrimeModule,
  ]
})
export class MoleculeModule { }
