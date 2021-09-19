import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../Models/UserLogin.model';
import { TOKEN_CYBERSOFT } from '../Util/setting';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    constructor(private httpClient:HttpClient) { }

    dangNhap(user:UserLogin):Observable<any>{
        //Cau hinh header
        let header = new HttpHeaders();
        header = header.set('TokenCybersoft', TOKEN_CYBERSOFT);

        let obser = this.httpClient.post('https://movienew.cybersoft.edu.vn/api/quanlynguoidung/dangnhap', user, {headers:header})

        return obser;
    }
    
}