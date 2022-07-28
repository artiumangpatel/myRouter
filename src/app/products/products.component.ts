import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  

  products = this.service.products;
  productsService: any;
  constructor(private service:ProductsService,private route:ActivatedRoute) { }

  // products=[{id:1,name:'laptop',},
  //  {id:2,name:'Mobile'},
  //  {id:3,name:'TV'},];
  
  // products=[{id:1,name:'laptop',image:"../../assets/laptop.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},
  //  {id:2,name:'TV',image:"../../assets/tv.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},
  //  {id:3,name:'Mobile',image:"../../assets/mobile.jpg",description:"Lorem ipsum dolor, sit amet consectetu adipisicing elit. Aut et ex reprehenderit quam voluptas consequuntur fugit, ullam labore natus officiis neque nam architecto, voluptatum nihil sequi tempora officia esse maxime!"},];
  
  ngOnInit(): void {
    //console.log(this.service.getProducts(), 'service here');
   // this.productsService.getAllProducts().then((data:any)=>{this.products=data;})
   this.products=this.route.snapshot.data['products'];
  }
}

