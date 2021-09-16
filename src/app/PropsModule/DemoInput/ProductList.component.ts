import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from './Product.component';

@Component({
    selector: 'app-product-list',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-4" *ngFor="let user of arrUser">
                    <app-product (eventViewDetail)="viewDetailParent($event)" [userInput]="user" ></app-product>
                </div>
            </div>
            <div class="form-group">
                <p>Price</p>
                <input class="form-control" #pass/>
                <button class="btn btn-outline-danger" (click)="changePassword(pass.value)">Change password</button>
            </div>
            <div>
                <h3>Thông tin chi tiết</h3>
                <div class="row">
                    <div class="col-4">
                        <img src="https://picsum.photos/200/200" width="300" height="300"/>
                    </div>
                    <div class="col-8">
                        <h3>Thông tin tài khoản</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>UserName</th>
                                    <th>{{userDetail.userName}}</th>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <th>{{userDetail.email}}</th>
                                </tr>
                                <tr>
                                    <th>Password</th>
                                    <th>{{userDetail.password}}</th>
                                </tr>   
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class ProductListComponent implements OnInit {

    @ViewChildren(ProductComponent) lstTagProduct!: QueryList<ProductComponent>

    arrUser: User[] = [
        { userName: 'Andrew Queens Jr.', password: '12345', email: 'flyingandrew@gmail.com', avatar: 'https://i.pravatar.cc?u=andrew' },
        { userName: 'Justin Bieber', password: '12345', email: 'justinbieber@gmail.com', avatar: 'https://i.pravatar.cc?u=justin' },
        { userName: 'Ryan Reynolds', password: '12345', email: 'ryanreynolds@gmail.com', avatar: 'https://i.pravatar.cc?u=ryan' },
    ]

    userDetail: User = this.arrUser[0];

    viewDetailParent(userDetail: User) {
        this.userDetail = userDetail;
    }

    constructor() { }

    ngOnInit() { }

    changePassword(newPassword:string){
        //Truy xuất đến các thẻ <app-product> => dùng vòng lặp để duyệt từng thẻ và thay đổi giá trị thuộc tính this.userInput của thẻ
        this.lstTagProduct.forEach((tagProduct:ProductComponent,index:number) => {
            if(tagProduct.userInput.userName === 'Justin Bieber'){
                tagProduct.userInput.password = newPassword;    
            }
        })

        // this.lstTagProduct.toArray()[2].viewDetail()
    }
}

interface User {
    avatar: string,
    userName: string,
    password: string,
    email: string
}