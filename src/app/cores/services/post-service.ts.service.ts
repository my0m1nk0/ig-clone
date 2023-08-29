import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
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
}
