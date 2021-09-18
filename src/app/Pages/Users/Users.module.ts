import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserTemplateComponent } from './UserTemplate.component';
import { AntDModule } from 'src/app/_core/Shared/AntDModule/Antd.module';
import { LoginComponent } from './Login.component';
import { RegisterComponent } from './Register.component';

//Cấu hình route cho thẻ <router-outlet> trong userTemplateComponent (componeny được load mặc định trên module này)

import { RouterModule, Routes } from '@angular/router';

const userRoutes:Routes = [
    {path:'', component:UserTemplateComponent, children: [
        {path:'', component:LoginComponent},
        {path:'login', component:LoginComponent},
        {path:'register', component:RegisterComponent}
    ]}
]


@NgModule({
    declarations: [UserTemplateComponent],
    imports: [CommonModule, FormsModule, AntDModule, RouterModule.forChild(userRoutes)],
    exports: [],
})
export class UserModule { }
