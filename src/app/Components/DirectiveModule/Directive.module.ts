import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapDirectiveComponent } from './BaiTapDirective.component';
import { BaiTapQLSPComponent } from './BaiTapQLSP.component';
import { DemoNgContentComponent } from './DemoNgContent.component';
import { DirectiveComponent } from './Directive.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent, DemoNgContentComponent, BaiTapDirectiveComponent, BaiTapQLSPComponent]
})
export class DirectiveModule { }
