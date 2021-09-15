import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BT4Module } from './Components/08E_BaiTap4_Angular/BaiTap4.module';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DataBindingModule } from './Components/DataBindingModule/DataBinding.module';
import { DemoComponent } from './Components/Demo.components';
import { DirectiveModule } from './Components/DirectiveModule/Directive.module';
import { PropsModule } from './PropsModule/Props.module';

@NgModule({
  declarations: [ //Nơi chứa component *Mỗi component sinh ra phải có module chứa nó
    AppComponent, 
    DemoComponent, 
  ],
  imports: [  //Nơi import các module khác của ứng dụng
    BrowserModule, BaiTapLayoutModule, DataBindingModule, DirectiveModule, BT4Module, PropsModule
  ],
  providers: [], //Nơi khải báo các service
  bootstrap: [AppComponent] //Nơi khai báo các Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
