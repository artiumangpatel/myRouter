import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product/product1/product1.component';
import { Product2Component } from './product/product2/product2.component';
import { Product3Component } from './product/product3/product3.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'about',component:AboutComponent},
{path:'contact-us',component:ContactUsComponent},
{path:'product',component:ProductComponent},
{path:'product/:id',component:Product1Component},
// {path:'product',component:ProductComponent,
//  children:[
//           {path:'product1',component:Product1Component},
//           {path:'product2',component:Product2Component},
//           {path:'product3',component:Product3Component},
// ]},
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
