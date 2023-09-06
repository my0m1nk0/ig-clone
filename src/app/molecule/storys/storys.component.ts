import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {StoryCreateComponent} from "../../atoms/story-create/story-create.component";
import {StoryService} from "../../cores/services/story.service";
import {StoryI} from "../../models/story";

@Component({
  selector: 'app-storys',
  templateUrl: './storys.component.html',
  styleUrls: ['./storys.component.scss'],
  providers: [DialogService, MessageService]
})
export class StorysComponent implements OnInit {

  ref: DynamicDialogRef | undefined;
  displayBasic: boolean = false;
  stories: any[] | undefined;
  currentStoryImages?: string;


  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private dialogService: DialogService, private messageService: MessageService, private storyService: StoryService) {
  }

  openStoryCreate() {
    this.ref = this.dialogService.open(StoryCreateComponent, {
      header: 'Create New Story',
      width: '50%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((res) => {
      if (res)
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Story uploaded'})
    })
  }

  ngOnInit(): void {
    this.fetchStory()
  }

  fetchStory() {
    this.storyService.getStory().subscribe(
      (stories: StoryI[]) => {
        this.stories = stories;
        console.log("stories", this.stories)
      }
    );
  }

  showStoryImages(story: any) {
      this.currentStoryImages = story.imgs;
    this.displayBasic = true; // Show the galleria

  }

}
