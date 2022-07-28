import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements  Resolve<any>{

  constructor(private productsService:ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
   return  this.productsService.getAllProducts().then((data:any)=>
   {return data;
  });
  }
}
