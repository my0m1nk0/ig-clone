import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { PostI } from 'src/app/models/post';
import { dataConverter } from '../data-converter';
import { FireStoreUserService } from './fire-store-user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post=new BehaviorSubject<PostI[]>([]);
  postsCollection : CollectionReference<DocumentData>;
  firestore: Firestore = inject(Firestore);
  constructor(private userService: FireStoreUserService) { this.postsCollection = collection(this.firestore, 'posts').withConverter(dataConverter); }

  addNewPost(postForm: PostI) {
    return from(addDoc(this.postsCollection, { ...postForm, user_id: this.userService.loginUser.getValue()?.id }));
  }

  getPost(){
    collectionData(this.postsCollection).subscribe((res)=>{
       this.post.next(res as PostI[])

    })
  }
}