class Tuong {
	ten: string;
	motatuong: string;
	kynang: string[];


	constructor(ten: string, motatuong: string, kynang: string[]) {
		this.ten = ten;
		this.motatuong = motatuong;
		this.kynang = kynang;
	}

	show(): void {
		let kn: string = "";
		for (var i = 0; i < this.kynang.length; ++i) {
			kn += this.kynang[i];
			kn += " | "
		}
		var tt = `Tướng: ${this.ten}. Mô tả: ${this.motatuong}. Kỹ năng: ${kn}`
		console.log(tt);
	}
}

class SatThu extends Tuong {
	donsatthu: string;

	constructor(ten: string, motatuong: string, kynang: string[], donsatthu: string) {
		super(ten, motatuong, kynang);
		this.donsatthu = donsatthu;
	}

	show(): void {
		super.show(); // sử dụng lại show() ở class cha
		//Nhưng định nghĩa thêm cái của con
		console.log(`Đòn sát thủ: ${this.donsatthu}`);		
	}
}

let Corki = new Tuong('Corki', 'The Daring Bombardier', ['Valkyrie', 'Hextech shrapnel shells', 'Missile barrage', 'Gatling gun', 'Phosphorus bomb']);
let Ashe = new Tuong('Ashe', 'The Frost Archer', ['Ranger\'s focus', 'Hawkshot', 'Frost shot', 'Enchanted crystal arrow', 'Volley']);
Corki.show();
Ashe.show();

var Talon = new SatThu('Talon', 'The Blade\'s Shadow', ['Noxian diplomacy', 'Shadow assault', 'Rake', 'Cutthroat', 'Mercy'], 'SÁT THỦ VÔ HÌNH');
