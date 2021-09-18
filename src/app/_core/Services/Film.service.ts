import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TOKEN_CYBERSOFT } from '../Util/setting';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FilmService {

    constructor(private httpClient: HttpClient) { } //httpClient giống axios

    getFilms():Observable<any> {
        //Cấu hình header
        let header = new HttpHeaders();
        header = header.set('TokenCyberSoft', TOKEN_CYBERSOFT)
        //Gọi api tương tự axios trả về 1 observable
        let obser = this.httpClient.get('http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01', {headers:header})

        return obser;
    }
    
    getFilmDetail(maPhim:number):Observable<any> {
        //Cấu hình header
        let header = new HttpHeaders();
        header = header.set('TokenCyberSoft', TOKEN_CYBERSOFT)
        //Gọi api tương tự axios trả về 1 observable
        let obser = this.httpClient.get(`http://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`, {headers:header})

        return obser;
    }
}