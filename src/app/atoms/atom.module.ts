import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { SharePrimeModule } from '../cores/prime-shared.module';
import { PostItemComponent } from './post-item/post-item.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';

const COMPONETS = [
  CreatePostComponent,
  PostItemComponent,
  UserProfileIconComponent
]

@NgModule({
  declarations: COMPONETS,
  exports: COMPONETS,
  imports: [
    CommonModule,
    SharePrimeModule
  ]
})
export class AtomModule { }
