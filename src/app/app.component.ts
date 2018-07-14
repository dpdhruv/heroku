import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public container:any=[];
public category="";
public loading=false;
public page:number=1;
public tag=[];
public isEmpty=false;

public tagName:string=" ";

getCategory(){
  console.log(this.category);
}

update_page(){
  this.page++;
  //this.get_material(this.category,this.page);
}
  constructor(private p:ApiService){}

  get(i){
   // alert(i);
  //  console.log(this.tag.indexOf(i));
    //document.getElementById("tag_name").innerHTML="hey";
     // console.log(this.tag[i].tag.tag_name);
    this.tagName=this.tag[i].tag.tag_name;
    //alert("tag:"+this.tagName)
    this.get_material(this.category,this.page,this.tagName);
  }

  get_material(category,page,tagName){
    //alert("tag:"+this.tagName);
    this.loading=true;
    this.p.porn(this.category,this.page,this.tagName).subscribe( res=> {
      this.loading = false;
      this.container= res.json().videos;
      if(this.container.length==0)
        {
          this.isEmpty=true;
        }
        else{
          this.isEmpty=false;
        }
      console.log(this.container);
        });   
  }

  get_tags(){
    this.p.getTags().subscribe( res=> {
      this.tag=res.json().tags;
      console.log(this.tag)
    });
  }  

 ngOnInit(){
   //console.log(this.category);
    this.get_material(this.category,this.page,this.tagName);
    this.get_tags();

   
 }
}
