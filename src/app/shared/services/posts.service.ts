import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private firestore: AngularFirestore) {
  }

  public getAllPosts(): Observable<Post[]> {
    return this.firestore.collection<Post>('posts').valueChanges();
  }

  public getSearchPosts(searchText : string): Observable<Post[]> {
    return this.firestore.collection<Post>('posts').valueChanges();
  }
}