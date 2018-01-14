import { SanPham } from "./sanpham"

export class QuanLyHang {
	private hang : SanPham[] = [];
	
	constructor() {}

	getCacSanPham() : SanPham[] {
		return [];
	}

	getSanPhamById() : SanPham {
		var motsanpham = new SanPham(1,'sp1','images/1.jpg',200,'Mo ta', true);
		return motsanpham;
	}

	addSanPham(): void {}

	showSanPham(): string {
		return "";
	}
}
