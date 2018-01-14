"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SanPhamGioHang {
    constructor(sanpham, soluong = 1) {
        this.sanpham = sanpham;
        this.soluong = soluong;
    }
    tinhGiaTien() {
        return;
    }
    ;
    showSanPhamTrongGioHang() {
        return "";
    }
    laySanPham() {
        return this.sanpham;
    }
    laysoluong() {
        return this.soluong;
    }
    thaydoisoluong(v) {
        this.soluong = v;
    }
}
exports.SanPhamGioHang = SanPhamGioHang;
