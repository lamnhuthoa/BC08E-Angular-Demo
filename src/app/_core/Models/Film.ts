export class Film {
    maPhim: number = 0;
    tenPhim: string = '';
    biDanh: string = '';
    trailer: string = '';
    hinhAnh: string = '';
    moTa: string = '';
    maNhom: string = '';
    ngayKhoiChieu: Date = new Date();
    danhGia: number = 0;
    hot: boolean = true;
    dangChieu: boolean = true;
    sapChieu: boolean = true;
    constructor(){
        
    }
}

// {
//     "maPhim": 4987,
//     "tenPhim": "Hobbs and Shaw",
//     "biDanh": "hobbs-and-shaw",
//     "trailer": "https://www.youtube.com/embed/b736ZM_KfEk",
//     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/hobbs-shaw_gp01.jpeg",
//     "moTa": "Lấy bối cảnh đua xe nghẹt thở.",
//     "maNhom": "GP01",
//     "ngayKhoiChieu": "2021-09-16T16:59:20.993",
//     "danhGia": 10,
//     "hot": false,
//     "dangChieu": false,
//     "sapChieu": true
// }