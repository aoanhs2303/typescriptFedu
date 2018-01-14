import { SanPham } from "./sanpham"
import { SanPhamGioHang } from "./sanphamgiohang"

export class QuanLyGioHang {
	private cacSanPhamTrongGioHang: SanPhamGioHang[] = [];

	addSanPhamTrongGioHang(sanpham: SanPhamGioHang): void {
		this.cacSanPhamTrongGioHang.push(sanpham);
	}

	checkSPTruocKhiThem(motsanpham: SanPham): number {
		for (var i:number = 0; i < this.cacSanPhamTrongGioHang.length; ++i) {
			if(this.cacSanPhamTrongGioHang[i].laySanPham().id == motsanpham.id) {
				return i;
			} 
		}
		return -1;
	}

	tangSoLuong(motsanpham: SanPham) : void {
		var index: number = this.checkSPTruocKhiThem(motsanpham); // tra ve id cua san pham duoc tang so luong
		var soluonghientai = this.cacSanPhamTrongGioHang[index].laysoluong();
		soluonghientai = soluonghientai + 1;
		this.cacSanPhamTrongGioHang[index].thaydoisoluong(soluonghientai);
	}

	updateSanPham(sanpham: SanPham, soluong: number): void {
		for (var i = 0; i < this.cacSanPhamTrongGioHang.length; ++i) {
			var idsp = this.cacSanPhamTrongGioHang[i].laySanPham().id;
			if(idsp == sanpham.id) {
				this.cacSanPhamTrongGioHang[i].thaydoisoluong(soluong);

				console.log(this.cacSanPhamTrongGioHang[i]);
			}
		}
	}
	kiemTraTrangThai(): void {}
	tinhSoLuong(): number {
		var total:number = 0;
		for (var i = 0; i < this.cacSanPhamTrongGioHang.length; ++i) {
			total += this.cacSanPhamTrongGioHang[i].laysoluong();
		}
		return total;
	}
	tinhGia(): number {
		var total:number = 0;
		for (var i = 0; i < this.cacSanPhamTrongGioHang.length; ++i) {
			total += this.cacSanPhamTrongGioHang[i].laysoluong() * this.cacSanPhamTrongGioHang[i].laySanPham().gia;
		}
		return total;
	}

	xoaSanPham(sanpham: SanPham) {
		var vitri: number = -1;
		for (var i = 0; i < this.cacSanPhamTrongGioHang.length; ++i) {
			var idsp = this.cacSanPhamTrongGioHang[i].laySanPham().id;
			if(idsp == sanpham.id) {
				vitri = i;
			} 	
		}	
		this.cacSanPhamTrongGioHang.splice(vitri,1);
	}

	hienThiGioHang(): string {
		var giohangHTML:string = "";
		for (var i = 0; i < this.cacSanPhamTrongGioHang.length; ++i) {
			giohangHTML += `
<div class="row motsanpham">
	<div class="col-sm-3">
		<img src="${this.cacSanPhamTrongGioHang[i].laySanPham().anh}" alt="" class="img-fluid">
	</div>
	<div class="col-sm-4">
		<a href="" class="tieude">${this.cacSanPhamTrongGioHang[i].laySanPham().ten}</a>
		<div class="noidungsp">
			${this.cacSanPhamTrongGioHang[i].laySanPham().mota}
		</div>
	</div>
	<div class="col-sm-2 gia">${this.cacSanPhamTrongGioHang[i].laySanPham().gia} ₫</div>
	<div class="col-sm-2">
		<input type="number" min="1" data-idsp="${this.cacSanPhamTrongGioHang[i].laySanPham().id}" class="inputSL" value="${this.cacSanPhamTrongGioHang[i].laysoluong()}">
	</div>
	<div class="col-sm-1">
		<div class="btn-group">
			<div class="btn btn-outline-danger btn-sm xoasp" data-idsp="${this.cacSanPhamTrongGioHang[i].laySanPham().id}"><i class="fa fa-times"></i> Xóa</div>						
		</div>

	</div>
</div>
`;
		}

		

		return giohangHTML;
	}

	xemGioHang(): SanPhamGioHang[] {
		return this.cacSanPhamTrongGioHang;
	}
}