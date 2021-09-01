import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './Components/Demo.components';

@NgModule({
  declarations: [
    AppComponent, DemoComponent //Nơi chứa component *Mỗi component sinh ra phải có module chứa nó
  ],
  imports: [
    BrowserModule //Nơi import các module khác của ứng dụng
  ],
  providers: [], //Nơi khải báo các service
  bootstrap: [AppComponent] //Nơi khai báo các Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
