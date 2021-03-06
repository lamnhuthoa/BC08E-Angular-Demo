import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DataBindingModule } from './Components/DataBindingModule/DataBinding.module';
import { DemoComponent } from './Components/Demo.components';
import { DirectiveModule } from './Components/DirectiveModule/Directive.module';

@NgModule({
  declarations: [ //Nơi chứa component *Mỗi component sinh ra phải có module chứa nó
    AppComponent, 
    DemoComponent, 
  ],
  imports: [  //Nơi import các module khác của ứng dụng
    BrowserModule, BaiTapLayoutModule, DataBindingModule, DirectiveModule
  ],
  providers: [], //Nơi khải báo các service
  bootstrap: [AppComponent] //Nơi khai báo các Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
