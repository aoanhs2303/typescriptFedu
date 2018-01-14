var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tuong = /** @class */ (function () {
    function Tuong(ten, motatuong, kynang) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kynang = kynang;
    }
    Tuong.prototype.show = function () {
        var kn = "";
        for (var i = 0; i < this.kynang.length; ++i) {
            kn += this.kynang[i];
            kn += " | ";
        }
        var tt = "T\u01B0\u1EDBng: " + this.ten + ". M\u00F4 t\u1EA3: " + this.motatuong + ". K\u1EF9 n\u0103ng: " + kn;
        console.log(tt);
    };
    return Tuong;
}());
var SatThu = /** @class */ (function (_super) {
    __extends(SatThu, _super);
    function SatThu(ten, motatuong, kynang, donsatthu) {
        var _this = _super.call(this, ten, motatuong, kynang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    SatThu.prototype.show = function () {
        _super.prototype.show.call(this); // sử dụng lại show() ở class cha
        //Nhưng định nghĩa thêm cái của con
        console.log("\u0110\u00F2n s\u00E1t th\u1EE7: " + this.donsatthu);
    };
    return SatThu;
}(Tuong));
var Corki = new Tuong('Corki', 'The Daring Bombardier', ['Valkyrie', 'Hextech shrapnel shells', 'Missile barrage', 'Gatling gun', 'Phosphorus bomb']);
var Ashe = new Tuong('Ashe', 'The Frost Archer', ['Ranger\'s focus', 'Hawkshot', 'Frost shot', 'Enchanted crystal arrow', 'Volley']);
Corki.show();
Ashe.show();
var Talon = new SatThu('Talon', 'The Blade\'s Shadow', ['Noxian diplomacy', 'Shadow assault', 'Rake', 'Cutthroat', 'Mercy'], 'SÁT THỦ VÔ HÌNH');
console.log(Talon.show());
