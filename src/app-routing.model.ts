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


const appRoutes:Routes =[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
   {path:'main',component:MainScreenComponent},
   
    {path:'login',component:LoginComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'cart',component:CartComponent},
    {path:'cakes',component:ProductDetailsCakesComponent},
    {path:'cupcakes',component:ProductDetailsCupcakesComponent},
    {path:'pasteries',component:ProductDetailsPasteriesComponent},
    {path:'cookies',component:ProductDetailsCookiesComponent},
    {path:'pie',component:ProductDetailsPieComponent},
    {path:'donuts',component:ProductDetailsDonutsComponent},


];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}

