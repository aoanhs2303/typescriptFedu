var chu;
chu = 'abc';
var chu2;
chu2 = 20;
console.log("Toi se " + chu2 + " thang sau");
var hocvien;
hocvien = ['Teo', 'Nam', 'Luc'];
for (var i = 0; i < hocvien.length; ++i) {
    console.log(hocvien[i]);
}
var num;
num = [2, 4, 6];
var check;
check = true;
var flag;
flag = [true, false, false];
/*KIỂU ENUM*/
var trangthai;
(function (trangthai) {
    trangthai[trangthai["moidangky"] = 0] = "moidangky";
    trangthai[trangthai["dathutien"] = 1] = "dathutien";
    trangthai[trangthai["hoanthanh"] = 2] = "hoanthanh";
})(trangthai || (trangthai = {}));
;
console.log(trangthai.dathutien);
// kiểu hỗn hợp - tuple
var hontap = ['abc', 20];
/*KIỂU ANY*/
var x;
x = 10;
x = "abc";
x = {
    dongho: "casio",
    xemay: "SH",
    diem: {
        toan: 10,
        ly: 20
    }
};
/*Kiểu void*/
function tinhtoan() {
    console.log('Kiêu void');
}
/*ep kiểu*/
var kieu1;
kieu1 = "Ép kiểu";
console.log(kieu1.length);
console.log(kieu1.length);
