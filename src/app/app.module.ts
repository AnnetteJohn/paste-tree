import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from 'src/app-routing.model';
import { ProductServices } from './product.service';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsCakesComponent } from './product-details-cakes/product-details-cakes.component';
import { ProductDetailsCupcakesComponent } from './product-details-cupcakes/product-details-cupcakes.component';
import { ProductDetailsPasteriesComponent } from './product-details-pasteries/product-details-pasteries.component';
import { ProductDetailsCookiesComponent } from './product-details-cookies/product-details-cookies.component';
import { ProductDetailsPieComponent } from './product-details-pie/product-details-pie.component';
import { ProductDetailsDonutsComponent } from './product-details-donuts/product-details-donuts.component';
import { ProductCakesComponent } from './product-cakes/product-cakes.component';
import { ProductCupcakesComponent } from './product-cupcakes/product-cupcakes.component';
import { ProductPasteriesComponent } from './product-pasteries/product-pasteries.component';
import { ProductPieComponent } from './product-pie/product-pie.component';
import { ProductDonutsComponent } from './product-donuts/product-donuts.component';
import { ProductCookiesComponent } from './product-cookies/product-cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    ProductDetailsCakesComponent,
    ProductDetailsCupcakesComponent,
    ProductDetailsPasteriesComponent,
    ProductDetailsCookiesComponent,
    ProductDetailsPieComponent,
    ProductDetailsDonutsComponent,
    ProductCakesComponent,
    ProductCupcakesComponent,
    ProductPasteriesComponent,
    ProductPieComponent,
    ProductDonutsComponent,
    ProductCookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
