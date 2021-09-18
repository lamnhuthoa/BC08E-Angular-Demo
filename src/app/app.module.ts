import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BT4Module } from './Components/08E_BaiTap4_Angular/BaiTap4.module';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DataBindingModule } from './Components/DataBindingModule/DataBinding.module';
import { DemoComponent } from './Components/Demo.components';
import { DirectiveModule } from './Components/DirectiveModule/Directive.module';
import { PropsModule } from './PropsModule/Props.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectiveUIModule } from './DirectiveUI/DirectiveUI.module';

//Khai báo routing  
import {Routes,RouterModule} from '@angular/router';
import { HomeModule } from './Pages/Home.module';
import { UserModule } from './Pages/Users/Users.module';
import { AdminModule } from './Pages/Admin/Admin.module';

let appRoutes:Routes = [
  {path:'home', loadChildren:()=>HomeModule},
  {path:'user', loadChildren:()=>UserModule},
  {path:'admin', loadChildren:()=>AdminModule},
  {path:'',loadChildren:()=>HomeModule}


  // {path:'home', component:HomeComponent},
  // {path:'about', component:AboutComponent},
  // {path:'contact', component:ContactComponent},
  // {path:'login', component:LoginComponent},
  // {path:'register', component:RegisterComponent},
  // {path:'', component:HomeComponent}, //Home là trang chủ của web
  // {path:'**', redirectTo:''}, //Gõ link tùm lum, redirect về trang chủ
]

registerLocaleData(en);

@NgModule({
  declarations: [ //Nơi chứa component *Mỗi component sinh ra phải có module chứa nó
    AppComponent, 
    DemoComponent, 
  ],
  imports: [  //Nơi import các module khác của ứng dụng
    BrowserModule, BaiTapLayoutModule, 
    DataBindingModule, DirectiveModule, 
    BT4Module, PropsModule, 
    FormsModule, HttpClientModule, 
    BrowserAnimationsModule, DirectiveUIModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule //Module giúp gọi API
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }], //Nơi khải báo các service
  bootstrap: [AppComponent] //Nơi khai báo các Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
