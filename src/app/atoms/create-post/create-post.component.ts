import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostCreateFormComponent } from '../post-create-form/post-create-form.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  providers: [DialogService, MessageService]
})
export class CreatePostComponent {
  ref: DynamicDialogRef | undefined;
  constructor(private dialogService: DialogService, private messageService: MessageService,) { }

  openCreate() {
    this.ref = this.dialogService.open(PostCreateFormComponent, {
      header: 'Create New Post',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((res) => {
      if (res)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Post uploaded' })
    })
  }
}
