import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostListItem } from './dateModel/PostListItem';
import {Observable} from 'rxjs';
import { ApiConfig } from 'src/app/blog/ApiConfig';
//import {environment} from '.'

@Injectable()
export class PostResource {
    private readonly URL = ApiConfig.URL + ' /posts';

    constructor(private httpClient: HttpClient) {

    } 
   public findAll() : Observable<PostListItem[ ]> {
       return this.httpClient.get(this.URL)  as Observable<PostListItem[]> ;
   }

} 