import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor() { }
  
  products=[{id:1,name:'laptop'},
   {id:2,name:'Mobile'},
   {id:3,name:'TV'},];
   
 
  // products=[{id:'number',name:'string'}];
  ngOnInit(): void {
    
  }

}
