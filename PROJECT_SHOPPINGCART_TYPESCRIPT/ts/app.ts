import { SanPham } from "./sanpham"
import { QuanLyHang } from "./quanlyhang"
import { QuanLyGioHang } from "./quanlygiohang"
import { SanPhamGioHang } from "./sanphamgiohang"

console.log("--------SHOPPING-------");
var tatcahang = new QuanLyHang();
var hangs = tatcahang.getCacSanPham();
var giohang = new QuanLyGioHang();


var cacSanPhamKhac = document.querySelector('.sanphamkhac');
var gioHangHTML = document.querySelector('.giohang');
var soluongSP = document.querySelector('small.SL span');
var thanhtien = document.querySelector('.thanhtien .doto');
var tamtinh = document.querySelector('.tamtinh .phai');
var nutxoa;

cacSanPhamKhac.innerHTML = tatcahang.showSanPham();


var nutmua = document.querySelectorAll('.muangay');
for (var i = 0; i < nutmua.length; ++i) {
	nutmua[i].addEventListener('click', function() {
		var id:number = this.getAttribute("data-idsp");
		var spLayDuoc:SanPham = tatcahang.getSanPhamById(id);	

		if(giohang.checkSPTruocKhiThem(spLayDuoc) == -1) {	
			var chuyendoiSP2SPGH: SanPhamGioHang = new SanPhamGioHang(spLayDuoc, 1);
			giohang.addSanPhamTrongGioHang(chuyendoiSP2SPGH);	
		} else {
			giohang.tangSoLuong(spLayDuoc);
		}

		gioHangHTML.innerHTML = giohang.hienThiGioHang();
		var tt = `
<div class="alert alert-success" role="alert">
    <i class="fa fa-check-circle-o"></i> <strong>Sẩn phẩm ${spLayDuoc.ten}!</strong> Đã được thêm thành công !
</div>`

		thongbao(tt);
		capnhatgiaodien();
		var inputSoLuong = document.querySelectorAll('.inputSL');
		for (var i:number = 0; i < inputSoLuong.length; ++i) {
			inputSoLuong[i].addEventListener('change', function() {
				var idsp: any = this.getAttribute('data-idsp');
				var SanPhamLayDuoc:SanPham = tatcahang.getSanPhamById(idsp);
				giohang.updateSanPham(SanPhamLayDuoc, this.value);
				
				capnhatgiaodien();
				var tt = `
<div class="alert alert-warning" role="alert">
    <i class="fa fa-check-circle-o"></i> <strong>Sẩn phẩm ${SanPhamLayDuoc.ten}!</strong> Đã được cập nhật thành công !
</div>`

				thongbao(tt);
			})
		}

		// nutxoa = document.querySelectorAll('.btn.xoasp');
		// for (var i = 0; i < nutxoa.length; ++i) {
		// 	nutxoa[i].addEventListener('click', function() {
		// 		var id = this.getAttribute('data-idsp');
		// 		var SanPhamXoa = tatcahang.getSanPhamById(id);
				
		// 		giohang.xoaSanPham(SanPhamXoa);
		// 		gioHangHTML.innerHTML = giohang.hienThiGioHang();
		// 		capnhatgiaodien();
		// 	})
		// }
		XoaSP();
	})
}


function XoaSP() {
	nutxoa = document.querySelectorAll('.btn.xoasp');
	for (var i = 0; i < nutxoa.length; ++i) {
		nutxoa[i].addEventListener('click', function() {
			var id = this.getAttribute('data-idsp');
			var SanPhamXoa = tatcahang.getSanPhamById(id);
			
			giohang.xoaSanPham(SanPhamXoa);
			gioHangHTML.innerHTML = giohang.hienThiGioHang();
			capnhatgiaodien();
		})
	}	
}



function capnhatgiaodien() {
	soluongSP.innerHTML = giohang.tinhSoLuong().toString();
	thanhtien.innerHTML = giohang.tinhGia().toString();
	tamtinh.innerHTML = giohang.tinhGia().toString();
}

function thongbao(html: string) {
	var thongbao = document.querySelector('.thongbao');
	thongbao.innerHTML = html;
}