import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    template: `
    <div class="container w-75">
        <form #frmInfo="ngForm" (ngSubmit)="submit(frmInfo.value)">
            <h3>Form - Validation</h3>
            <div class="form-group">
                <p>Email</p>
                <input [(ngModel)]="userInput.email" class="form-control" minlength="6" maxlength="32" #email="ngModel" name="email" ngModel required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <div *ngIf="(email.touched || email.dirty) && email.errors">\
                    <p *ngIf="email.errors.required" class="alert alert-danger">Email không được bỏ trống!</p>
                    <p *ngIf="email.errors.pattern" class="alert alert-danger">Email không đúng định dạng!</p>
                    <p *ngIf="email.errors.minlength || email.errors.maxlength" class="alert alert-danger">Email từ 6 - 32 ký tự!</p>
                </div>
            </div>
            <div class="form-group">
                <p>Name</p>
                <input [(ngModel)]="userInput.name" class="form-control" name="name" ngModel />
            </div>
            <div class="form-group">
                <p>Schools</p>
                <select [(ngModel)]="userInput.school" class="form-control" name="school" ngModel>
                    <option *ngFor="let school of schools" [value]="school.id" >{{school.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" [disabled]="frmInfo.invalid || frmInfo.submitted" class="btn btn-danger">Submit</button>
            </div>
        </form>

        <div class="mt-2">
            <table class="table">
                <thead>
                    <tr><td>Email</td><td>Name</td><td>School</td><td></td></tr>
                </thead>
                <tbody>
                    <ng-container *ngIf="!isEdit">
                        <tr *ngFor="let user of arrUser">
                            <td>{{user.email}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.school}}</td>
                            <td>
                                <button class="mr-2 btn btn-primary"(click)="edit(user)">Chỉnh sửa</button>
                                <button class="mr-2 btn btn-success"(click)="setEdit()">Cập nhật</button>
                                <button class="ml-2 btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    </ng-container>
                    <ng-container *ngIf="isEdit">
                        <tr *ngFor="let user of arrUser">
                            <td>{{user.email}}</td>
                            <td><input class="form-control" [(ngModel)]="user.name" /></td>
                            <td>
                                <select class="form-control" [(ngModel)]="user.school">
                                    <option *ngFor="let school of schools" [value]="school.id">{{school.name}}</option>
                                </select>
                            </td>
                            <td>
                                <button class="mr-2 btn btn-primary"(click)="edit(user)">Chỉnh sửa</button>
                                <button class="mr-2 btn btn-success"(click)="setEdit()">Cập nhật</button>
                                <button class="ml-2 btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    </ng-container>
                </tbody>
            </table>
        </div>

    </div>
    `,
    styles: [`
        input.ng-invalid,select.ng-invalid {
            border-left:5px solid red;
        }

        input.ng-valid, select.ng-valid {
            border-left:5px solid green;
        }
    `]
})

export class FormComponent implements OnInit {

    isEdit:boolean = false;
    setEdit() {
        this.isEdit = !this.isEdit;
    }

    @ViewChild('frmInfo') frmInfo!: NgForm;

    userInput: User = { name: '', email: '', school: '' }

    arrUser: User[] = [
        { name: 'Justin', email: "justin@bieber.com", school: "1" }
    ]

    edit(userEdit: User) {
        // this.userInput = userEdit; //Cách 1
        this.frmInfo.setValue(userEdit); //Cách 2
    }

    // submit(values:NgForm){
    //     console.log('values', values);
    // }

    //Thêm thông tin && Cập nhật thông tin - Cách 1
    submit(values: User) {
        let userEdit = this.arrUser.find(us => us.email == values.email);
        if (userEdit) {
            //userEdit.email = values.email;
            userEdit.name = values.name;
            userEdit.school = values.school;
        }

    }

    schools: School[] = [
        { id: '1', name: 'CyberSoft' },
        { id: '2', name: 'CyberLearn' },
    ]

    constructor() { }

    ngOnInit() { }
}

interface User {
    email: string,
    name: string,
    school: string,
}


interface School {
    id: string, name: string
}