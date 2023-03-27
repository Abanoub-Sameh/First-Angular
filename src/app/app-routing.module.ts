import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTComponent } from './components/about/about.component';
import { CONTACTComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PORTFOLIOComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full' },
  {path:'home', component:HomeComponent },
  {path:'portpolio', component:PORTFOLIOComponent},
  {path:'contact', component:CONTACTComponent},
  {path:'about', component:ABOUTComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
