import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  // product:any;
  // productId:any;
  // constructor(private service:ProductsService,private activatedRoute:ActivatedRoute) { }
constructor(){}
  ngOnInit(): void {
    // this.productId=this.activatedRoute.snapshot.paramMap.get('id');
    // this.product=this.service.product.find((x: { id: any; })=>x.id===this.productId);}
  }


}