var Tuong = /** @class */ (function () {
    function Tuong(ten) {
        this.ten = ten;
    }
    Object.defineProperty(Tuong.prototype, "getTen", {
        /*Tạo 2 hàm getter và setter*/
        get: function () {
            return this.ten;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tuong.prototype, "setTen", {
        set: function (v) {
            this.ten = v;
        },
        enumerable: true,
        configurable: true
    });
    return Tuong;
}());
var Yasua = new Tuong("Kẻ bất dung thứ");
console.log("T\u00EAn t\u01B0\u01A1ng: " + Yasua.getTen);
Yasua.setTen = "15 phút GG"; // Không phải gọi thông thường
console.log("T\u00EAn t\u01B0\u1EDBng sau khi \u0111\u1ED5i: " + Yasua.getTen);
/*VÍ DỤ 2: Thực hành đặt mật khẩu*/
var matkhau = "aoanhs2303";
var Nguoi = /** @class */ (function () {
    function Nguoi(ten) {
        this._ten = ten;
    }
    Object.defineProperty(Nguoi.prototype, "ten", {
        get: function () {
            if (matkhau = "aoanhs2303") {
                return this._ten;
            }
            else {
                return "Sai roi";
            }
        },
        set: function (v) {
            if (matkhau == "aoanhs2303") {
                this._ten = v;
            }
            this._ten = "Sai mat khau";
        },
        enumerable: true,
        configurable: true
    });
    return Nguoi;
}());
var so1 = new Nguoi('Luc');
var matkhau = "123";
console.log(so1.ten);
so1.ten = "Thao";
console.log(so1.ten);
