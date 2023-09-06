import {inject, Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  DocumentData,
  Firestore
} from "@angular/fire/firestore";
import {FireStoreUserService} from "./fire-store-user.service";
import {dataConverter} from "../data-converter";
import {StoryI} from "../../models/story";
import {forkJoin, from, map, mergeMap, toArray} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storyCollection:CollectionReference<DocumentData>;
  firestore:Firestore= inject(Firestore);
  constructor(private userService:FireStoreUserService) {
    this.storyCollection = collection(this.firestore,'storys').withConverter(dataConverter);
  }
  addNewStory(storyForm:StoryI){
    return from(addDoc(this.storyCollection,{...storyForm,user_id:this.userService.loginUser.getValue()?.id}));
  }
  getStory() {
    return collectionData(this.storyCollection).pipe(
      mergeMap((stories: any[]) => {
        const observables = stories.map((story: any) => {
          return this.userService.getUserById(story.user_id).pipe(
            map((storyUser) => ({ ...story, user: storyUser?.data() }))
          );
        });

        return forkJoin(observables).pipe(
          map((result: any[]) => {
            return result;
          })
        );
      })
    );
  }
}
