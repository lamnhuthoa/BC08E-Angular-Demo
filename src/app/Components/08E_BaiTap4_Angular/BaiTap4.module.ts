import { NgModule } from '@angular/core';
import { BT4Component } from './BaiTap4.component';

//Sử dụng FormsModule cho 2waybinding
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BT4Component],
  imports: [CommonModule, FormsModule],
  exports: [BT4Component],
})
export class BT4Module {}
