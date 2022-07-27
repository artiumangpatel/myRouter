import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  loggedIn:boolean=true;
   
  login(){
    this.loggedIn=true;
  }

  logout(){
    this.loggedIn=false;
  }
  IsAuthenticated(){
    return this.loggedIn;
  }
  constructor() { }
}
