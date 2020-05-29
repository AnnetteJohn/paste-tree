import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MainScreenComponent } from './main-screen/main-screen.component';

//import { LoginComponent } from './login/login.component';
//import { SignUpComponent } from './sign-up/sign-up.component';



const appRoutes:Routes =[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
  //  {path:'main',component:MainScreenComponent},
   
    //{path:'login',component:LoginComponent},
   // {path:'sign-up',component:SignUpComponent},
   
];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}

