import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { PostI } from 'src/app/models/post';
import { dataConverter } from '../data-converter';
import { FireStoreUserService } from './fire-store-user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: CollectionReference<DocumentData>;
  firestore: Firestore = inject(Firestore);
  constructor(private userService: FireStoreUserService) { this.postsCollection = collection(this.firestore, 'posts').withConverter(dataConverter);; }

  addNewPost(postForm: PostI) {
    return from(addDoc(this.postsCollection, postForm));
  }

  getPosts() {
    return collectionData(this.postsCollection) as Observable<PostI[]>;
  }

  likePosts(post: PostI) {
    const isLike = post.like?.findIndex((userId) => userId == this.userService.loginUser.getValue()?.id)
    console.log(isLike, "updated");
    if (typeof isLike === 'number') {
      if (isLike >= 0) {
        post.like?.splice(isLike, 1)
      } else {
        const userId = this.userService.loginUser.getValue()?.id || "0"
        post.like = post.like ?? []
        post.like?.push(userId)
      }
    } else {
      const userId = this.userService.loginUser.getValue()?.id || "0"
      post.like = post.like ?? []
      post.like?.push(userId)
    }
    return this.updatePosts(post)
  }

  updatePosts(post: PostI) {
    return from(updateDoc(doc(this.firestore, 'posts', post.id), { ...post }))
  }


  sharePosts(post: PostI) {

    const isShared = post.share?.findIndex((userId) => userId == this.userService.loginUser.getValue()?.id)
    console.log(isShared, "updated");
    if (typeof isShared === 'number') {
      if (isShared >= 0) {
        post.share?.splice(isShared, 1)
      } else {
        const userId = this.userService.loginUser.getValue()?.id || "0"
        post.share = post.share ?? []
        post.share?.push(userId)
      }
    } else {
      const userId = this.userService.loginUser.getValue()?.id || "0"
      post.share = post.share ?? []
      post.share?.push(userId)
    }
    return this.updatePosts(post)
  }

  favPosts(post: PostI) {
    const isFav = post.fav?.findIndex((userId) => userId == this.userService.loginUser.getValue()?.id)
    console.log(isFav, "updated");
    if (typeof isFav === 'number') {
      if (isFav >= 0) {
        post.fav?.splice(isFav, 1)
      } else {
        const userId = this.userService.loginUser.getValue()?.id || "0"
        post.fav = post.fav ?? []
        post.fav?.push(userId)
      }
    } else {
      const userId = this.userService.loginUser.getValue()?.id || "0"
      post.fav = post.fav ?? []
      post.fav?.push(userId)
    }
    return this.updatePosts(post)
  }

}
