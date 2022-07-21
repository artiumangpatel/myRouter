import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  constructor(private service:ProductsService) { }

  products = this.service.products;
  // products=[{id:1,name:'laptop',},
  //  {id:2,name:'Mobile'},
  //  {id:3,name:'TV'},];
 
  // products=[{id:1,name:'laptop',image:"../../assets/laptop.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},
  //  {id:2,name:'TV',image:"../../assets/tv.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},
  //  {id:3,name:'Mobile',image:"../../assets/mobile.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},];
  
  ngOnInit(): void {
    console.log(this.service.getProducts(), 'service here');
  }
}

