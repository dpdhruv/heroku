import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

/*Varibles for error checking */  
  inValidCredentials:string;
  authErrorFlag:boolean=false;
 /*Varibles for error checking ends */ 

  constructor(private authservice: AuthService) { }

   sendData(studentForm){
    this.authservice.validatLogInMember(studentForm.value);
    this.inValidCredentials = this.authservice.inValidCredentials;
    this.authErrorFlag = this.authservice.authErrorFlag;
   } 
  
  ngOnInit() {
  }

}
