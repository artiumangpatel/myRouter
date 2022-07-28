import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { CanDeactivateService } from './services/can-deactivate.service';
import { ProductGuardService } from './services/product-guard.service';
import { ProductResolveService } from './services/product-resolve.service';


const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'about',component:AboutComponent,canDeactivate:[CanDeactivateService]},
{path:'contact-us',component:ContactUsComponent,canDeactivate:[CanDeactivateService]},
//canActiveGuard
// {path:'products',component:ProductsComponent,canActivate:[ProductGuardService]},
// {path:'products/productDetails/:id',component:ProductDetailsComponent},


//nested child
{path:'products',component:ProductsComponent,resolve:{products:ProductResolveService}},
{path: 'products',canActivateChild:[ProductGuardService], children:[
  {path:'productDetails/:id',component:ProductDetailsComponent}
]}, 
{path:'**',component:PageNotFoundComponent}, //wild card component(Error Page)


 //  {path:'products',component:ProductsComponent,
//  children:[
//           {path:'productDetails',component:ProductDetailsComponent},
        
// ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
