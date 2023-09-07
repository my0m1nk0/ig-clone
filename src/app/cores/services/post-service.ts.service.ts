import { Injectable, inject } from '@angular/core';
import {
    CollectionReference,
    DocumentData,
    Firestore,
    addDoc,
    collection,
    collectionData,
    doc,
    getDocs,
    query,
    updateDoc,
    where
} from '@angular/fire/firestore';
import { forkJoin, from, map, mergeMap, toArray } from 'rxjs';
import { PostComment, PostI } from 'src/app/models/post';
import { dataConverter } from '../data-converter';
import { FireStoreUserService } from './fire-store-user.service';

@Injectable({
    providedIn: 'root'
})
export class PostServiceTsService {
    postsCollection: CollectionReference<DocumentData>;
    firestore: Firestore = inject(Firestore);

    constructor(private userService: FireStoreUserService) {
        this.postsCollection = collection(this.firestore, 'posts').withConverter(dataConverter);
    }

    addNewPost(postForm: PostI) {
        return from(addDoc(this.postsCollection, { ...postForm, user_id: this.userService.loginUser.getValue()?.id }));
    }

    getPosts() {
        return collectionData(this.postsCollection).pipe(mergeMap((res) => {
            return from(res).pipe(mergeMap((post: any) => {
                post.comment = post.comment ?? []
                return forkJoin([this.userService.getUserById(post.user_id), ...post.comment.map((comment: any) => {
                    return this.userService.getUserById(comment.user_id).pipe(map((cmtUser) => ({ ...comment, user: cmtUser?.data() })))
                })]).pipe(map((result: any) => {
                    post['user'] = result[0].data()
                    result.splice(0, 1)
                    post['comment'] = result
                    return post
                }))
                // .pipe(mergeMap((user) => {
                //   post[user] = user
                //   return
                // }))
                // pipe(map((user) => ({ ...post, user: user?.data() })))
            }), toArray())
        }))
    }

    getPostsByUser(userId: string) {
        // return from(getDocs(doc(this.firestore,'posts',)))
        const filterQuery = query(this.postsCollection, where('user_id', '==', userId))
        return from(getDocs(filterQuery)).pipe(map((result) => result.docs.map((res) => res.data())))
    }

    likePosts(post: PostI) {
        const isLike = post.like?.findIndex((userId) => userId == this.userService.loginUser.getValue()?.id)
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

    commentPost(post: PostI, text: string, img: string) {
        const userId = this.userService.loginUser.getValue()?.id
        const newComment: PostComment = {
            user_id: userId || '',
            comment: text || '',
            img: img || '',
            user: this.userService.loginUser.getValue() || undefined
        }
        post.comment = post.comment ?? []
        post.comment.push(newComment)
        return this.updatePosts(post)
    }

}
