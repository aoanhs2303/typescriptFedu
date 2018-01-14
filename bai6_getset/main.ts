class Tuong {
	private ten: string;

	constructor(ten: string) {
		this.ten = ten;
	}

	/*Tạo 2 hàm getter và setter*/
	public get getTen() : string {
		return this.ten;
	}

	public set setTen(v : string) {
		this.ten = v;
	}
}

let Yasua = new Tuong("Kẻ bất dung thứ");
console.log(`Tên tương: ${Yasua.getTen}`);

Yasua.setTen = "15 phút GG" // Không phải gọi thông thường

console.log(`Tên tướng sau khi đổi: ${Yasua.getTen}`);

/*VÍ DỤ 2: Thực hành đặt mật khẩu*/

var matkhau = "aoanhs2303";
class Nguoi {
	private _ten: string
	constructor(ten: string) {
		this._ten = ten;
	}

	public get ten() : string {
		if(matkhau = "aoanhs2303") {
			return this._ten;
		}
		else {
			return "Sai roi"
		}
	}

	public set ten(v : string) {
		if(matkhau == "aoanhs2303") {
			this._ten = v;
		}
		this._ten = "Sai mat khau";
	}
}

var so1 = new Nguoi('Luc');
var matkhau = "123";

console.log(so1.ten);

so1.ten = "Thao";

console.log(so1.ten);