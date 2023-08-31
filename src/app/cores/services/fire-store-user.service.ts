import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, QueryDocumentSnapshot, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable, from, of, BehaviorSubject } from 'rxjs';
import { User } from '../../models/user'
import { dataConverter } from '../data-converter';
@Injectable({
  providedIn: 'root'
})
export class FireStoreUserService {
  item$ = new BehaviorSubject<User[]>([]);
  firestore: Firestore = inject(Firestore);
  userCollection: CollectionReference<DocumentData>
  loginUser = new BehaviorSubject<User | null>(null);
  constructor() {
    console.log("loginUser", this.loginUser);

  }

  getUser() {
    this.userCollection = collection(this.firestore, 'user').withConverter(dataConverter);
    collectionData(this.userCollection).subscribe((res) => {
      this.item$.next(res as User[])
    })
  }

  addNewUser(userInfo: User): Observable<any> {
    // addDoc(this.userCollection, userInfo).then((res)=>{

    // })
    const isExist = this.checkEmail(userInfo)
    if (isExist) {
      return of({ message: "User email is already used!", status: 400 })
    }
    return from(addDoc(this.userCollection, userInfo))
  }

  login(email: string, password: string) {
    const user = this.item$.getValue().find((user) => user.password === password && user.email === email)
    if (user) {
      this.loginUser.next(user)
    }
    return of(user)
  }

  checkEmail(userInfo: User) {
    const isExist = this.item$.getValue().some((user) => user.email === userInfo.email)
    return isExist
  }

 
}
