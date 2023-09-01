import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { SharePrimeModule } from './cores/prime-shared.module';
import { FireStoreUserService } from './cores/services/fire-store-user.service';
import { of } from 'rxjs';
import { MessageService } from 'primeng/api';

function appInitializer(userService: FireStoreUserService) {
  return () => {
    return new Promise((resolve: any) => {
      const user = localStorage.getItem('user');
      if (user)
        userService.loginUser.next(JSON.parse(user))
      resolve(true)
    })
    // const user = localStorage.getItem('user');
    // if (user)
    //   userService.loginUser.next(JSON.parse(user))
    // return of(true)
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharePrimeModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    MessageService,
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [FireStoreUserService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
