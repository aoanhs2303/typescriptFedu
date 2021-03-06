import { SanPham } from "./sanpham"

export class QuanLyHang {
	private hang: SanPham[] = [];
	
	constructor() {
		//Nếu sử dụng PHP thì dùng API để import chứ ko dùng tay nhu này :)
		var sanpham1 = new SanPham(1, "Ốp iPhone", "images/1.jpg", 50000, "Ốp đến từ nhật bản", true);
		var sanpham2 = new SanPham(2, "Ốp Samsung", "images/2.jpg", 60000, "Ốp đến từ hàn quốc", false);
		var sanpham3 = new SanPham(3, "Ốp Xiaomi", "images/3.jpg", 70000, "Ốp đến từ việt nam", true);
		var sanpham4 = new SanPham(4, "Ốp LG", "images/4.jpg", 20000, "Ốp đến từ Mỹ", true);
		var sanpham5 = new SanPham(5, "Ốp Sony", "images/5.jpg", 30000, "Ốp đến từ Thái Lan", true);
		var sanpham6 = new SanPham(6, "Ốp Nokia", "images/6.jpg", 40000, "Ốp đến từ Anh", true);
		this.addSanPham(sanpham1);
		this.addSanPham(sanpham2);
		this.addSanPham(sanpham3);
		this.addSanPham(sanpham4);
		this.addSanPham(sanpham5);
		this.addSanPham(sanpham6);
	}
	getSanPhamById(idsp: any) : any {
		
		for (var i: number = 0; i < this.hang.length; ++i) {
			if(this.hang[i].id == idsp) {
				return this.hang[i];
			}
		}
		return "Không có sản phẩm";
	}

	addSanPham(sp: SanPham): void {
		this.hang.push(sp);
	}
	getCacSanPham() : SanPham[] {
		return this.hang;
	}
	showSanPham(): string { // Lấy sản phẩm ra đẩy ra html
		if(this.hang.length == 0) {
			return "Không có sản phẩm";
		}
		var danhSachSanPham = "";
		for (var i = 0; i < this.hang.length; ++i) {
			danhSachSanPham += `
<div class="col-sm-4">
	<div class="card _1spkhac sp${this.hang[i].id}">
		<img class="card-img-top" src="${this.hang[i].anh}">
		<div class="card-block">
			<a href="" class="tieudespkhac">${this.hang[i].ten}</a><br>
			<b>${this.hang[i].gia} ₫</b>
			<p class="card-text">${this.hang[i].mota}</p>`
			if(this.hang[i].tinhtrang == false) {
				danhSachSanPham += `<button class="btn btn-outline-success btn-block disabled">Hết hàng</button>`				
			}else {
				danhSachSanPham += `<button class="btn btn-outline-success btn-block muangay" data-idsp="${this.hang[i].id}">Mua ngay</button>`		
			}

		danhSachSanPham += `</div>
	</div>
</div>`
		}
		return danhSachSanPham;
	}
}
