let chu: string;
chu = 'abc';

var chu2: number;
chu2 = 20;
console.log(`Toi se ${chu2} thang sau`);

var hocvien : string[];
hocvien = ['Teo', 'Nam', 'Luc'];
for (var i = 0; i < hocvien.length; ++i) {
	console.log(hocvien[i]);
}

var num : number[];
num = [2, 4, 6];

var check : boolean;
check = true;

var flag : boolean[];
flag = [true, false, false];

/*KIỂU ENUM*/
enum trangthai {moidangky, dathutien, hoanthanh};
console.log(trangthai.dathutien);

// kiểu hỗn hợp - tuple

var hontap : [string, number] = ['abc', 20];

/*KIỂU ANY*/
var x : any;
x = 10;
x = "abc";
x = {
	dongho: "casio",
	xemay: "SH",
	diem: {
		toan: 10,
		ly: 20
	}
}

/*Kiểu void*/
function tinhtoan() : void {
	console.log('Kiêu void');
}

/*ep kiểu*/
let kieu1: any;
kieu1 = "Ép kiểu";
console.log((<string>kieu1).length)
console.log((kieu1 as string).length)