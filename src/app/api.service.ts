import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { Http } from '@angular/http';

import { Observable} from 'rxjs';

const API_URL= environment.apiUrl;
const TagsUrl= environment.tagsUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  porn(cat:any,page:number,tname:string){
    var cat:any;
    var tname:string;
    console.log(tname);
    console.log(cat);
    console.log("getting material...");
    var url= API_URL+"&search="+cat;
    console.log(url);
    return this.http.get(API_URL+cat+"&category="+tname)
  }

  getTags(){
    return this.http.get(TagsUrl);
  }
}
