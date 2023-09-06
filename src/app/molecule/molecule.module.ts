import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './ads-list/ads-list.component';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { StorysComponent } from './storys/storys.component';
import { SharePrimeModule } from '../cores/prime-shared.module';
import { AtomModule } from '../atoms/atom.module';
import { PostCommentComponent } from './post-comment/post-comment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";


const COMPONENTS = [
  AdsListComponent,
  FriendsComponent,
  HeaderComponent,
  PostsComponent,
  StorysComponent,
  AdsListComponent,
  PostCommentComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
    imports: [
        CommonModule,
        AtomModule,
        SharePrimeModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class MoleculeModule { }
