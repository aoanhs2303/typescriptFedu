"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SanPham {
    constructor(id, ten, anh, gia, mota, tinhtrang) {
        this._id = id;
        this._ten = ten;
        this._anh = anh;
        this._gia = gia;
        this._mota = mota;
        this._tinhtrang = tinhtrang;
    }
    /*ID*/
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    /*TÊN*/
    get ten() {
        return this._ten;
    }
    set ten(v) {
        this._ten = v;
    }
    /*ẢNH*/
    get anh() {
        return this._anh;
    }
    set anh(v) {
        this._anh = v;
    }
    /*GIÁ*/
    get gia() {
        return this._gia;
    }
    set gia(v) {
        this._gia = v;
    }
    /*MÔ TẢ*/
    get mota() {
        return this._mota;
    }
    set mota(v) {
        this._mota = v;
    }
    /*TÌNH TRẠNG*/
    get tinhtrang() {
        return this._tinhtrang;
    }
    set tinhtrang(v) {
        this._tinhtrang = v;
    }
}
exports.SanPham = SanPham;
