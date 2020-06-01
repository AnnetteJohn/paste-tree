import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './app/main-screen/main-screen.component';
import { LoginComponent } from './app/login/login.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { CartComponent } from './app/cart/cart.component';
import { ProductDetailsCakesComponent } from './app/product-details-cakes/product-details-cakes.component';
import { ProductDetailsCupcakesComponent } from './app/product-details-cupcakes/product-details-cupcakes.component';
import { ProductDetailsPasteriesComponent } from './app/product-details-pasteries/product-details-pasteries.component';
import { ProductDetailsCookiesComponent } from './app/product-details-cookies/product-details-cookies.component';
import { ProductDetailsPieComponent } from './app/product-details-pie/product-details-pie.component';
import { ProductDetailsDonutsComponent } from './app/product-details-donuts/product-details-donuts.component';
import { ProductCakesComponent } from './app/product-cakes/product-cakes.component';
import { ProductCupcakesComponent } from './app/product-cupcakes/product-cupcakes.component';
import { ProductPasteriesComponent } from './app/product-pasteries/product-pasteries.component';
import { ProductPieComponent } from './app/product-pie/product-pie.component';
import { ProductDonutsComponent } from './app/product-donuts/product-donuts.component';
import { ProductCookiesComponent } from './app/product-cookies/product-cookies.component';


const appRoutes:Routes =[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
   {path:'main',component:MainScreenComponent},
   
    {path:'login',component:LoginComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'cart',component:CartComponent},
    {path:'details-cakes',component:ProductDetailsCakesComponent},
    {path:'details-cupcakes',component:ProductDetailsCupcakesComponent},
    {path:'details-pasteries',component:ProductDetailsPasteriesComponent},
    {path:'details-cookies',component:ProductDetailsCookiesComponent},
    {path:'details-pie',component:ProductDetailsPieComponent},
    {path:'details-donuts',component:ProductDetailsDonutsComponent},
    {path:'cakes',component:ProductCakesComponent},
    {path:'cupcakes',component:ProductCupcakesComponent},
    {path:'pasteries',component:ProductPasteriesComponent},
    {path:'cookies',component:ProductCookiesComponent},
    {path:'pie',component:ProductPieComponent},
    {path:'donuts',component:ProductDonutsComponent},



];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}

