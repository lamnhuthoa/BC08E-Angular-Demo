import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BTContentComponent } from './BaiTapContent.component';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTFooterComponent } from './BTFooter.component';
import { BTHeaderComponent } from './BTHeader.component';
import { BTSliderComponent } from './BTSlider.component';

@NgModule({
  declarations: [
    BaiTapLayoutComponent, 
    BTHeaderComponent,
    BTFooterComponent,
    BTSliderComponent,
    BTContentComponent
  ],
  imports: [CommonModule], //Nơi import các module khác cho ứng dụng
  exports: [BaiTapLayoutComponent], //Kết quả cần xuất ra (component, module) của module này (để module khác import vào)
})
export class BaiTapLayoutModule {}
