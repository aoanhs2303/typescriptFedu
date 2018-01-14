import { SanPham } from "./sanpham"
import { SanPhamGioHang } from "./sanphamgiohang"

class QuanLyGioHang {
	private cacSanPhamTrongGioHang: SanPham[] = [];

	addSanPhamTrongGioHang(sanpham: SanPham, soluong: number): void {}
	updateSanPhamTrongGioHang(sanpham: SanPham, soluong: number): void {}
	kiemTraTrangThai(): void {}
	tinhSoLuong(): number {
		return ;
	}
	tinhGia(): number {
		return ;
	}
	hienThiGioHang(): string {
		return ;
	}
}