import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
   products=[{id:1,name:'laptop',image:"../../assets/laptop.jpg"},
   {id:2,name:'TV',image:"../../assets/tv.jpg"},
   {id:3,name:'Mobile',image:"../../assets/mobile.jpg"},];
  
   
  constructor() { }
  getProducts(){
   // return this.products.slice();
  }
}
