import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { SharePrimeModule } from '../cores/prime-shared.module';
import { PostItemComponent } from './post-item/post-item.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';
import { PostCreateFormComponent } from './post-create-form/post-create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommentItemComponent } from './comment-item/comment-item.component';
import {StoryCreateComponent} from "./story-create/story-create.component";
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const COMPONETS = [
  CreatePostComponent,
  PostItemComponent,
  UserProfileIconComponent,
  CreatePostComponent,
  PostCreateFormComponent,
  CommentItemComponent,
  StoryCreateComponent,
  EditProfileComponent
]

@NgModule({
  declarations: COMPONETS,
  exports: COMPONETS,
  imports: [
    CommonModule,
    SharePrimeModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AtomModule { }
