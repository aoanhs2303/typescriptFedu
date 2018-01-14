function xem(x: number) : number {
	return x;
}

function xem2(x: string) : string {
	return x;
}

console.log(xem(100));

function xemTQ<T>(x: T):T {
	return x;
}

console.log(xemTQ<string>("Hello Generic"));
console.log(xemTQ<number>(999));

class MayTinh {
	ten: string	
	
	static xemThongTin<T>(x: T[]): void {
		console.log(x);
	} 
}

MayTinh.xemThongTin([2,3,4]);

class OpDienThoai<X,Y,Z> { // X : kiểu của id, Y: kiểu chủa ten,...
	id: X;
	ten: Y;
	gia: Z;

	constructor(id: X, ten: Y, gia: Z) {
		this.id = id;
		this.ten = ten;
		this.gia = gia;
	}

	xem(): void {
		console.log(`
ID: ${this.id}
Ten: ${this.ten}
Gia: ${this.gia}
`);

	}
}

var op1 = new OpDienThoai<number,string,number>(1, "Ốp con thỏ", 100);
op1.xem();

var op2 = new OpDienThoai<number,string,string>(2, "Ốp iPhone", "10 USD");
op2.xem();
