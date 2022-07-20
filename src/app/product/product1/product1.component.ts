import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit,OnDestroy {
  product:any;
  productId:any;
  
  products:{ id: number; name: string; image: ImageData; } | undefined
  RouteParamObs: any;

  constructor(private Route:ActivatedRoute,private service:ProductsService) { }
//constructor(){}
  ngOnInit(): void {
  //   this.productId = this.Route.snapshot.paramMap.get('id');
  //  // this.productId = this.activatedRoute.snapshot.params['id'];
  //   console.log("productid"+this.productId,this.service.products);
  //    this.product = this.service.products.find((x:any) => x.id == this.productId);
  //   console.log("product   :"+this.product.name)
  
  //using observal
 this.RouteParamObs= this.Route.paramMap.subscribe((params)=>{
      this.productId=params.get('id');
      this.product = this.service.products.find((x:any) => x.id == this.productId);
      
  });
 }
ngOnDestroy() {
  this.RouteParamObs.unScribe();
}
  }


