function xem(x) {
    return x;
}
function xem2(x) {
    return x;
}
console.log(xem(100));
function xemTQ(x) {
    return x;
}
console.log(xemTQ("Hello Generic"));
console.log(xemTQ(999));
var MayTinh = /** @class */ (function () {
    function MayTinh() {
    }
    MayTinh.xemThongTin = function (x) {
        console.log(x);
    };
    return MayTinh;
}());
MayTinh.xemThongTin([2, 3, 4]);
var OpDienThoai = /** @class */ (function () {
    function OpDienThoai(id, ten, gia) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
    }
    OpDienThoai.prototype.xem = function () {
        console.log("\nID: " + this.id + "\nTen: " + this.ten + "\nGia: " + this.gia + "\n");
    };
    return OpDienThoai;
}());
var op1 = new OpDienThoai(1, "Ốp con thỏ", 100);
op1.xem();
var op2 = new OpDienThoai(2, "Ốp iPhone", "10 USD");
op2.xem();
