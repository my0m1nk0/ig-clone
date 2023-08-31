import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { SharePrimeModule } from '../cores/prime-shared.module';
import { PostItemComponent } from './post-item/post-item.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';
import { MoleculeModule } from '../molecule/molecule.module';
import { PostCreateFormComponent } from './post-create-form/post-create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const COMPONETS = [
  CreatePostComponent,
  PostItemComponent,
  UserProfileIconComponent,
  CreatePostComponent,
  PostCreateFormComponent,
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
