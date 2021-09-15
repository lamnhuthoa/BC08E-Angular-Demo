import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoNgContentComponent } from './DemoNgContent.component';
import { DirectiveComponent } from './Directive.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent, DemoNgContentComponent]
})
export class DirectiveModule { }
