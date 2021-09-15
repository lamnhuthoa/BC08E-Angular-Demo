import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container">
            <h3 class="display-4">Structural (directive angular cung cấp)</h3>
            <h3>*ngIf</h3>
            <nav class="nav bg-dark text-white">
              <a *ngIf="!isLogin; else tempLogin" class="nav-link active text-white" href="#" (click)="login()">Login</a>
              <!-- <a *ngIf="isLogin" class="nav-link active text-white" href="#" (click)="logout()">Hello {{userName}}!</a> -->
            </nav>

            <ng-template #tempLogin>
                <a *ngIf="isLogin" class="nav-link active text-white" href="#" (click)="logout()">Hello {{userName}}</a>
            </ng-template>
            <hr/>
            <div class="form-group">
                <p>Nhập số</p>
                <input class="from-control w-25" [(ngModel)]="number" />
            </div>
            <div class="alert alert-success">
                <p *ngIf="number%2===0">Số chẵn</p>
                <p *ngIf="number%2!==0">Số lẻ</p>
            </div>

            <h3>*ngSwitchCase</h3>
            <select [(ngModel)]="color" class="form-control w-25">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
            </select>
            <div [ngSwitch]="color">
                <p style="color: red;" *ngSwitchCase="'red'">Red</p>
                <p style="color: green;" *ngSwitchCase="'green'">Green</p>
                <p style="color: blue;" *ngSwitchCase="'blue'">Blue</p>
                <p style="color: orange;" *ngSwitchCase="'orange'">Orange</p>
            </div>

            <h3>*ngFor</h3>
            <div class="row">
                <div class="col-4" *ngFor="let user of arrUser; let index = index">
                    <div class="card">
                        <img [src]="user.avatar" alt="..." />
                        <div class="card-body">
                            <p>ID: {{index + 1}}</p>
                            <p>Username: {{user.userName}}</p>
                            <p>Password: {{user.password}}</p>
                            <p>Email: {{user.email}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <h3>ng-content</h3>
            <app-demo-ngContent>
                <img class="logo" src="https://picsum.photos/50/50" alt="..." />
                <h3 class="title">Cybersoft</h3>
            </app-demo-ngContent>
            <hr/>
            <h3>[ngClass]</h3>
            <p [ngClass]="{'mau-chu':mauChu, 'font-chu':fontChu}">lorem ipsum dolor sit amet, consectetur adip</p>

            <table class="table">
                <thead>
                    <tr>
                        <th>userName</th>
                        <th>password</th>
                        <th>email</th>
                        <th>avatar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr [ngClass]="{'bg-dark text-white':index%2==0}" *ngFor="let user of arrUser; let index = index" >
                        <td>{{user.userName}}</td>
                        <td>{{user.password}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.avatar}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <h3>*ngStyle</h3>
            <div [ngStyle]="{'background-image':backgroundImg}" style="height:300px">
                lorem
            </div>

            <h3>Bài tập Tăng Giảm Font</h3>
            <p [ngStyle]="{'font-size':fontSize+'px'}">lorem asdasgads kjasdasd kqwejwhda seqowie sfsdf</p>
            <button class="m-2 btn btn-outline-success" (click)="tangGiamFont(true)">+</button>
            <button class="m-2 btn btn-outline-success" (click)="tangGiamFont(false)">-</button>

            <hr/>
            <h3>Bài tập Login</h3>
            <app-bt-directive></app-bt-directive>

            <h3>Bài tập quản lý sản phẩm</h3>
            <app-bt-qlsp></app-bt-qlsp>

        </div>

    `,
    styles:[`
        .mau-chu {
            color:red;
        }
        .font-chu {
            font-size: 25px;
        }
    
    `]
})

export class DirectiveComponent implements OnInit {
    fontSize:number = 17;
    backgroundImg:string = 'url("https://picsum.photos/200/200")';

    mauChu:boolean = true;
    fontChu:boolean = false;

    arrUser:User[] = [
        {userName: 'Andrew Queens Jr.', password: '12345', email: 'flyingandrew@gmail.com', avatar:'https://i.pravatar.cc?u=andrew'},
        {userName: 'Justin Bieber', password: '12345', email: 'justinbieber@gmail.com', avatar:'https://i.pravatar.cc?u=justin'},
        {userName: 'Ryan Reynolds', password: '12345', email: 'ryanreynolds@gmail.com', avatar:'https://i.pravatar.cc?u=ryan'},
    ]
    color:string = 'red';
    number:number = 5;
    userName:string = 'Hoa Lam';
    isLogin:boolean = false;

    login(){
        this.isLogin = true
    }

    logout(){
        this.isLogin = false
    }

    tangGiamFont(tangGiam:boolean){
        if(tangGiam) this.fontSize += 1;
        else this.fontSize -= 1;
    }

    constructor() { }

    ngOnInit() { }
}

interface User{
    avatar:string,
    userName:string,
    password:string,
    email:string
}