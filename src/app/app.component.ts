import { Component, OnInit, Inject } from '@angular/core';
import { FireStoreUserService } from './cores/services/fire-store-user.service';
import { APP_CONFIG } from './models/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'instragram-clone';

  constructor(private fireStoreService: FireStoreUserService, @Inject(APP_CONFIG) private appConfig: any) { }

  ngOnInit(): void {
    this.fireStoreService.getUser()
    this.fireStoreService.item$.subscribe((result) => {
      console.log("result", result);
    })
  }
}
