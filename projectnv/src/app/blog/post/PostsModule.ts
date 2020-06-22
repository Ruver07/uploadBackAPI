import {NgModule} from '@angular/core';
import { PostListModule } from './list/PostListModule';
import { PostService } from './services/services/PostService';
import { PostResource } from './services/services/PostResource';

@NgModule({
      imports:[
          PostListModule,
    ],
      exports:[
        PostListModule,
      ],
      declarations:[],
      providers:[
        PostService,
        PostResource
      ],
})

export class PostsModule{

}