import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate,CanActivateChild {
  constructor( private authService:AuthService,private router:Router) { }

  //canActivateChild only apply on child not paren route
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.canActivate(childRoute,state);
  }
 

  //canActivate guard used for protect from unauthorised user
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.IsAuthenticated()){
      return true;
    }else{
      this.router.navigate(['']);//navigate to home if false
      return false;
    }
  }
}
