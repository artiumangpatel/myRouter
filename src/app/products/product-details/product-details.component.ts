import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy {

  product:any;
  productId:any;
  
  products:{ id: number; name: string; image: ImageData; description:string} | undefined
  RouteParamObs: any;
  editMode:boolean=false;

  constructor(private Route:ActivatedRoute,private service:ProductsService,private router:Router) { }
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
  // this.editMode=Boolean(this.Route.snapshot.queryParamMap.get('edit'));
  this.Route.queryParamMap.subscribe((param)=>{
    this.editMode=Boolean (param.get('edit'));})
  console.log("editMode :"+this.editMode);
 }
 ngOnDestroy() {
   this.RouteParamObs.unsubscribe();
  }
  appendQueryParam(){
this.router.navigate(['/products/productDetails',this.productId],{queryParams:{edit:true}});
  }

}
