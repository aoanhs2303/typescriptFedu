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
var khoahoc = /** @class */ (function () {
    function khoahoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    khoahoc.prototype.xem = function () {
        console.log("ID: " + this.id + "\nT\u00EAn khoa h\u1ECDc: " + this.ten + "\n\u0110\u1ED9 d\u00E0i: " + this.dodai + "\n");
    };
    return khoahoc;
}());
var khoalaptrinh = /** @class */ (function (_super) {
    __extends(khoalaptrinh, _super);
    function khoalaptrinh(id, ten, dodai, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.filedinhkem = filedinhkem;
        return _this;
    }
    khoalaptrinh.prototype.xem = function () {
        _super.prototype.xem.call(this);
        console.log("File \u0111\u00EDnh k\u00E8m: " + this.filedinhkem);
    };
    return khoalaptrinh;
}(khoahoc));
/*PUBLIC*/
/*PRIVATE - Chỉ truy nhập ở trong class*/
/*PROTECTED - CHỈ TUY NHẬP ở trong class cha và con*/
var khoa08 = new khoahoc(8, 'Học PTS', 20);
var khoa09 = new khoalaptrinh(9, 'Học Front End', 24, 'a.zip');
