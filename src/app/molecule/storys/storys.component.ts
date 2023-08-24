import { Component } from '@angular/core';

@Component({
  selector: 'app-storys',
  templateUrl: './storys.component.html',
  styleUrls: ['./storys.component.scss']
})
export class StorysComponent {
  storys: any[] = [
    {
      fullname: 'Testing',
      profile: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      storys: ''
    },
    {
      fullname: 'Testing 1',
      profile: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      storys: ''
    },
    {
      fullname: 'Testing 2',
      profile: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      storys: ''
    }
  ]
}