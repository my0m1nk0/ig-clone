import { Component, OnInit } from '@angular/core';
import { FireStoreUserService } from './cores/services/fire-store-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'instragram-clone';

  constructor(private fireStoreService: FireStoreUserService,) { }

  ngOnInit(): void {

    this.fireStoreService.getUser()
    this.fireStoreService.item$.subscribe((result) => {
      console.log("result", result);
    })
  }
}
