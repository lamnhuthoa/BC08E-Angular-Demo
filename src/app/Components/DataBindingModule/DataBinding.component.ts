import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
        <div class="container">
            <h1 class="display-4">DataBinding</h1>
            <h3>Oneway Binding</h3>
            <h6>1. Interpolation (Binding dữ liệu từ models -> view thông qua thuộc tính với cặp dấu ngoặc nhọn => Dùng cho phần inner HTML của thẻ </h6>
            <p>Tiêu đề: {{title}}</p>
            <input value={{title}} />
            <h6 style="margin-top: 50px">2. Property binding (Binding dựa trên thuộc tính của thẻ thông qua []) => Thường dùng cho thẻ input</h6>
            <div [innerHTML]="title"></div>
            <input [value]="title" />
            <h6 style="margin-top: 50px">3. Event binding (Thay đổi dữ liệu trên giao diện thông qua xử lý thao tác từ người dùng)</h6>
            <div class="form-group">
                <p>Tiêu đề</p>
                <input clas="form-control w-25" #tagInput /> Template Variable<br/>
                <button class="btn btn-success mt-2" (click)="changeTitle(tagInput.value)">Change title</button>
            </div>
            <h6 style="margin-top: 50px">4. Two ways binding (Binding dữ liệu 2 chiều tự động)</h6>
            <input class="form-control" [(ngModel)]="title" />

            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let product of arrProduct">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td><img [src]="product.img" width="50" height="50" alt="..." /></td>
                        <td>{{(product.price).toLocaleString()}}</td>
                        <td><input class="form-control" [(ngModel)]="product.quantity" /></td>
                        <td>{{(product.price*product.quantity).toLocaleString()}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class DataBindingComponent implements OnInit {
    //MVVM
    //Dữ liệu muốn hiển thị được lên giao diện thì phải là thuộc tính của component
    title:string = 'BC08E';
    arrProduct: Product[] = [
        {id: '1', name: 'iPhone X', price: 1000, img: 'https://picsum.photos/id/1/200/200', quantity: 15},
        {id: '2', name: 'iPhone XS', price: 2000, img: 'https://picsum.photos/id/2/200/200', quantity: 10},
        {id: '3', name: 'iPhone XS Max', price: 3000, img: 'https://picsum.photos/id/3/200/200', quantity: 20},
    ]

    constructor() { }

    changeTitle(newTitle:string)
    {
        this.title = newTitle;
    }

    ngOnInit() { }
}

interface Product {
    id:string,
    name:string,
    price:number,
    img:string,
    quantity:number
}