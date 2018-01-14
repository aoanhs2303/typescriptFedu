class nhan_vat_game {
	tenA: string;
	sloganA: string;
	mauA: number;

	constructor(ten:string, slogan:string, mau:number) {
		this.tenA = ten;
		this.sloganA = slogan;
		this.mauA = mau;
	}
	chay() {}
	chem() {}
	show() {
		return `Tướng: ${this.tenA}, ${this.sloganA}. Chỉ số máu: ${this.mauA}`
	}
}

var yasua = new nhan_vat_game('Yasua', 'The Unforgiven', 600);
var zed = new nhan_vat_game('Zed', 'The Master of Shadows', 500);
console.log(zed.show());


/*CLASS ĐIỆN THOẠI*/
class dienthoai {
	ten: string;
	gia: number;
	sao: number;
	mausac: string[];
	constructor(ten: string, gia: number, sao: number, mausac: string[]) {
		this.ten = ten;
		this.gia = gia;
		this.sao = sao;
		this.mausac = mausac;
	}

	show() {
		return `
Tên điện thoại : ${this.ten}
Giá: ${this.gia}
Sao: ${this.sao}
Màu Sắc: ${this.mausac.length}
		`
	}
}

var iPhone = new dienthoai('iPhone X', 1000, 5, ['Trắng', 'Đen', 'Đỏ']);

console.log(iPhone.show());

/*Quản lý công việc*/
enum state {
	Create = 10,
	Proceessing,
	Finish
}

class CongViec {
	id: number;
	ten: string;
	trangthai: state;


	constructor(id: number, ten: string, trangthai: state) {
		this.id = id;
		this.ten = ten;
		this.trangthai = trangthai;
	}

	show() {
		return this.trangthai;
	}
}

let cv1 = new CongViec(1, 'Thư ký', state.Finish);
console.log(cv1.show());

/*Từ khóa STATIC*/

class LOL {
	static tenA: string = "Static sẽ ko cần tạo đối tượng";
	sloganA: string;
	mauA: number;

	constructor(ten:string, slogan:string, mau:number) {
		this.tenA = ten;
		this.sloganA = slogan;
		this.mauA = mau;
	}
	show() {
		return `Tướng: ${this.tenA}, ${this.sloganA}. Chỉ số máu: ${this.mauA}`
	}

	static teststatic() {
		return "STATIC";
	}
}

console.log(LOL.tenA);
console.log(LOL.mauA); // sẽ bị underfind
console.log(LOL.teststatic());
