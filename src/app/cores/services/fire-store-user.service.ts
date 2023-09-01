import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, QueryDocumentSnapshot, addDoc, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable, from, of, BehaviorSubject, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
  auth: AngularFireAuth
  constructor() {
    console.log("loginUser", this.loginUser);
    this.getUser();
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
      this.loginUser.next(user);
      localStorage.setItem("user", JSON.stringify(user));
    }
    return of(user);

  }

  checkEmail(userInfo: User) {
    const isExist = this.item$.getValue().some((user) => user.email === userInfo.email)
    return isExist
  }

  getUserById(id: string): Observable<any> {
    console.log(id);
    if (typeof id == 'string')
      return from(getDoc(doc(this.firestore, 'user', id)))
    return of(null)
  }
}
