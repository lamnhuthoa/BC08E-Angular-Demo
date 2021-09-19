import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AntDModule } from '../_core/Shared/AntDModule/Antd.module';
import { AboutComponent } from './About.component';
import { ContactComponent } from './Contact.component';
import { HomeComponent } from './Home.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { DetailsComponent } from './Details.component';

//Định nghĩa homeRoutes
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Form.component';

const homeRoutes:Routes = [
    {path:'', component:HomeTemplateComponent, children:[
        {path:'', component:HomeComponent},
        {path: 'about', component:AboutComponent},
        {path: 'contact', component:ContactComponent}, 
        {path: 'details/:id', component:DetailsComponent}, 
        {path: 'details', component:DetailsComponent}, 
        {path: 'form', component:FormComponent},  
        
    ]}
]

@NgModule({
    declarations: [HomeComponent, AboutComponent, ContactComponent, HomeTemplateComponent, FormComponent],
    imports: [CommonModule, FormsModule, AntDModule, RouterModule.forChild(homeRoutes)],
    exports: [],
    // providers:[FilmService] //Khai báo service
})
export class HomeModule { }
