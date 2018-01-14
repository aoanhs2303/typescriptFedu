class khoahoc {
	private id: number;
	private ten: string;
	private dodai: number;

	constructor(id: number, ten: string, dodai: number) {
		this.id = id;
		this.ten = ten;
		this.dodai = dodai;
	}

	xem() {
		console.log(
`ID: ${this.id}
Tên khoa học: ${this.ten}
Độ dài: ${this.dodai}
`
		);
	}
}

class khoalaptrinh extends khoahoc {
	filedinhkem: string;

	constructor(id: number, ten: string, dodai: number, filedinhkem: string) {
		super(id,ten,dodai);
		this.filedinhkem = filedinhkem;
	}

	xem() {
		super.xem();
		console.log(`File đính kèm: ${this.filedinhkem}`);
	}
}

/*PUBLIC*/
/*PRIVATE - Chỉ truy nhập ở trong class*/
/*PROTECTED - CHỈ TUY NHẬP ở trong class cha và con*/

let khoa08 = new khoahoc(8, 'Học PTS', 20);
let khoa09 = new khoalaptrinh(9, 'Học Front End', 24, 'a.zip');





