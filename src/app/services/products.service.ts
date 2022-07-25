import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
   products=[{id:1,name:'laptop',image:"../../assets/laptop.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},
   {id:2,name:'TV',image:"../../assets/tv.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},
   {id:3,name:'Mobile',image:"../../assets/mobile.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},];
  
   
  constructor() { }
  getProducts(){
    
    return this.products;
  }
}
