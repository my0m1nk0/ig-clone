import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { PostI } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection : CollectionReference<DocumentData>;
  firestore: Firestore = inject(Firestore);
  constructor() { this.postsCollection = collection(this.firestore,'posts'); }

  addNewPost(postForm: PostI) {
    return from(addDoc(this.postsCollection,postForm));
  }

  getPosts(){
    return collectionData(this.postsCollection) as Observable<PostI[]>;
  }
}
