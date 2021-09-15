import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-qlsp',
    template: `
        <div class='container'>
            <div class="card">
                <div class="card-header bg-dark text-white">Thêm sản phẩm</div>
                <div class="card-body">
                    <div class="form-group">
                        <p>Mã sản phẩm</p>
                        <input class="form-control" [(ngModel)]="sanPham.maSanPham"/>
                    </div>
                    <div class="form-group">
                        <p>Tên sản phẩm</p>
                        <input class="form-control" [(ngModel)]="sanPham.tenSanPham"/>
                    </div>
                    <div class="form-group">
                        <p>Giá</p>
                        <input class="form-control" [(ngModel)]="sanPham.gia"/>
                    </div>
                </div>
                <div class="card-footer text-left">
                    <button class="btn btn-outline-danger" (click)="themSanPham()">Thêm sản phẩm</button>
                </div>
            </div>

            <div class="card mt-2">
                <div class="card-header bg-dark text-white font-weight-bond">Danh sach san pham</div>
                <table clas="table">
                    <thead>
                        <tr>
                            <th>Ma san pham</th>
                            <th>Hinh anh</th>
                            <th>Ten san pham</th>
                            <th>Gia</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-white" [ngClass]="{'bg-danger':(index+1)%2==0, 'bg-warning':(index+1)%2!=0}" *ngFor="let sanPham of mangSanPham; let index = index" >
                            <td>{{sanPham.maSanPham}}</td>
                            <td><img [src]="sanPham.hinhAnh" alt="..." width="50" height="50" /></td>
                            <td>{{sanPham.tenSanPham}}</td>
                            <td>{{sanPham.gia}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
})

export class BaiTapQLSPComponent implements OnInit { 

    /**
     * 1. Render san pham ra giao dien
     * 2. Hien thi xen ke mau sac giua cac dong san pham
     * 3. Xay dung chuc nang them san pham
     */

    sanPham:SanPham = {maSanPham: '', tenSanPham: '', gia: 0, hinhAnh: ''}

    mangSanPham:SanPham[] = [
        {maSanPham: '1', tenSanPham: 'AAA', gia: 1000, hinhAnh: 'https://i.pravatar.cc?u=AAA'},
        {maSanPham: '2', tenSanPham: 'BBB', gia: 2000, hinhAnh: 'https://i.pravatar.cc?u=BBB'},
        {maSanPham: '3', tenSanPham: 'CCC', gia: 3000, hinhAnh: 'https://i.pravatar.cc?u=CCC'},
        {maSanPham: '4', tenSanPham: 'DDD', gia: 4000, hinhAnh: 'https://i.pravatar.cc?u=DDD'},
    ]

    constructor() { }

    ngOnInit() { }

    themSanPham() {
        let sanPhamMoi = {...this.sanPham, hinhAnh: `https://i.pravatar.cc?u=${this.sanPham.tenSanPham}`}
        this.mangSanPham.push(sanPhamMoi);
    }
}

interface SanPham {
    maSanPham:string;
    tenSanPham:string;
    gia:number;
    hinhAnh:string;
}