import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './DemoInput/Product.component';
import { ProductListComponent } from './DemoInput/ProductList.component';
import { DemoViewChildComponent } from './DemoViewChild/DemoViewChild.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ProductListComponent, DemoViewChildComponent],
    declarations: [ProductListComponent, ProductComponent, DemoViewChildComponent],
    providers: [],
})
export class PropsModule { }
