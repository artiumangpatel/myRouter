import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
   products=[{id:1,name:'laptop'},
   {id:2,name:'TV'},
   {id:3,name:'Mobile'},];
  
   
  constructor() { }
  getProducts(){
   // return this.products.slice();
  }
}
