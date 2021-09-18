import { Component, OnInit } from '@angular/core';
import { Film } from '../_core/Models/Film';
import { FilmService } from '../_core/Services/Film.service';

@Component({
    selector: 'app-home',
    template: `
        <div class="container">
            <h3>Danh sách phim</h3>
            <div class="row">
                <div class="col-4" *ngFor="let film of films">
                    <div class="card">
                        <img [src]="film.hinhAnh" alt="..." />
                        <div class="card-body">
                            <p>{{film.tenPhim}}</p>
                            <p>{{film.moTa}}</p>
                            <a class="btn btn-success mr-2" routerLink="/details/{{film.maPhim}}">Xem chi tiết</a>
                            <!-- <a class="btn btn-success" [routerLink]="['/details',film.maPhim]">Xem chi tiết</a> -->
                            <a class="btn btn-danger" [routerLink]="['/details']" [queryParams]="{maPhim:film.maPhim, tenPhim:film.tenPhim}">Detail Query Params</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class HomeComponent implements OnInit {

    films:Film[] = [];

    //DI: Dependency injection
    constructor(private filmService:FilmService) {

    }

    //ngOnInit là 1 lifecycle giống như component didmount
    ngOnInit() {
        this.filmService.getFilms().subscribe((result)=>{
            this.films = result.content;
            console.log('result',result);
        },(errors)=>{
            console.log('errors',{errors});
        })
    }
}