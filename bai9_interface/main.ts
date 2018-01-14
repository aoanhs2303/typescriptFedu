function xemThongTin(motnguoi: {tuoi: number, ten: string}): void {
	console.log(`
Tên: ${motnguoi.ten}
Tuổi: ${motnguoi.tuoi}
`);
}

xemThongTin({tuoi: 20, ten: "Luc"});

interface nguoi {
	ten: string;
	tuoi: number;
}

function Xem(nguoi) {
	console.log(`
Tên: ${nguoi.ten}
Tuổi: ${nguoi.tuoi}
`);
}	
Xem({ten: "Luc", tuoi: 20});

/*INTERFACE CLASS - Khi có một class tạo từ interface này phải có hết các thuộc tính hàm của thằng interface*/
interface tuongInterface {
	ten: string;
	mau: number;
	satthuong: number;
	mota: string;

	xemTuong(): void ;
	donkynang(mau: number): any;
}

class tuong implements tuongInterface {
	ten: string;
	mau: number;
	satthuong: number;
	mota: string;
	mana: number; // có thể tạo thêm nhưng bắt buộc phải có đủ hết
	xemTuong(): void {
		console.log('Xem');
	}
	donkynang(mau: number): any {
		return mau;
	}
}

/*Namespace - Export*/
//Namespace có thể đặt tên thoải mái ko sợ trùng cái buildin function

module TrongNaySeKhongLoi {
	export class String{

	}

	class Number {

	}
}

var EP = new TrongNaySeKhongLoi.String