import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <div class="card text-light">
            <img [src]="userInput.avatar" alt="..."/>
            <div class="card-body bg-dark">
                <p>username: {{userInput.userName}}</p> 
                <p>email: {{userInput.email}}</p>
                <p>password: {{userInput.password}}</p>
                <button (click)="viewDetail()" class="btn btn-success">Xem chi tiết</button>
            </div>

        </div>
    `
})

export class ProductComponent implements OnInit {
    //Input dung de nhan gia tri tham so tai noi su dung the nay
    @Input('userInput') userInput!:User 
    @Output() eventViewDetail = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    viewDetail(){
        //Đưa dữ liệu ra ngoài thông qua phương thức emit

        //Đưa ra nhiều tham số (đưa các tham số vào array hoặc object)
        let arrParam:[User,boolean] = [this.userInput, true];

        let objectParam = {
            user: this.userInput,
            status: true,
        }

        this.eventViewDetail.emit(this.userInput); //emit(objectParam) hoặc emit(arrParam)
    }
}

interface User{
    avatar:string,
    userName:string,
    password:string,
    email:string
}