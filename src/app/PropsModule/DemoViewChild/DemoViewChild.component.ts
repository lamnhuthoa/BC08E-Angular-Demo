import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../DemoInput/ProductList.component';

@Component({
    selector: 'app-demo-view',
    template: `
        <div class="container">
            <h3>Demo view child</h3>
            <div class="form-group">
                <p>user name</p>
                <input id="userName" class="form-control" #usName [(ngModel)]="newUser.userName" />
            </div>
            <div class="form-group">
                <p>password</p>
                <input id="userName" class="form-control" [(ngModel)]="newUser.password"/>
            </div>
            <div class="form-group">
                <p>Email</p>
                <input id="userName" class="form-control" [(ngModel)]="newUser.email"/>
            </div>
            <div class="form-group">
                <button class="btn btn-success mr-2" (click)="getUserName()" >Get userName</button>
                <button class="btn btn-outline-success" (click)="addUser()">Add user</button>
            </div>

            <div>
                <h3>Danh sách user</h3>
                <app-product-list #tagProductList></app-product-list>
            </div>

            
        </div>
    `
})

export class DemoViewChildComponent implements OnInit {
    constructor() { }
    newUser:User = {userName: '', password: '', email: '', avatar: ''};
    @ViewChild('usName') tagInput!:ElementRef; //ElementRef là đối tượng HTML trong Angular
    @ViewChild('tagProductList') tagProductList!:ProductListComponent;
    ngOnInit() { }
    addUser(){
        let newUser = {...this.newUser, avatar: 'https://i.pravatar.cc?u='+this.newUser.userName}

        //Dom đến thẻ app-product-list thông qua viewchild
        this.tagProductList.arrUser.push(newUser);
    }
    getUserName(){
        // this.tagInput.nativeElement.value = 'I\'ve been clicked';
        // this.tagInput.nativeElement.style.color = 'red';
        // document.getElementById('userName')!.style.fontSize = '50px';
        console.log(this.tagProductList);
        this.tagProductList.arrUser = [];
    }
}

interface User{
    avatar:string,
    userName:string,
    password:string,
    email:string
}