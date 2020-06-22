import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { PostListItem } from '../services/services/dateModel/PostListItem';
import { PostService } from '../services/services/PostService';



@Component({

  selector: 'app-post-list',
  templateUrl: 'postList.html'

})

export class PostListComponent implements OnInit {
  public postList : Observable<PostListItem[]>;
  constructor(private postService: PostService) {

  }
  ngOnInit() {
               this.postList = this.postService.getAllPostItems();
  }
}
