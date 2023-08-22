import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { SharePrimeModule } from '../cores/prime-shared.module';

const COMPONETS = [
  CreatePostComponent
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
