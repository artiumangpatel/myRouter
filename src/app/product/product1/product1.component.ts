import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  product:any;
  productId:any;
  
  constructor(private activatedRoute:ActivatedRoute,private service:ProductsService) { }
//constructor(){}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
   // this.productId = this.activatedRoute.snapshot.params['id'];
    console.log("productid"+this.productId,this.service.products);
     this.product = this.service.products.find((x:any) => x.id == this.productId);
    console.log("product"+this.product.name)
    }
  }


