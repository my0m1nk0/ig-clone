import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostCreateFormComponent } from '../post-create-form/post-create-form.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  providers: [DialogService]
})
export class CreatePostComponent {
  ref: DynamicDialogRef | undefined;
  constructor(private dialogService: DialogService) { }

  openCreate() {
    this.ref = this.dialogService.open(PostCreateFormComponent, {
      header: 'Create New Post',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }
}
