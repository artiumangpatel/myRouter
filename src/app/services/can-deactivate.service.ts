import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateService implements CanDeactivate<ContactUsComponent> {

  constructor() { }
  canDeactivate(component: ContactUsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  return component.canExit();  
  }
}
