function xemThongTin(motnguoi) {
    console.log("\nT\u00EAn: " + motnguoi.ten + "\nTu\u1ED5i: " + motnguoi.tuoi + "\n");
}
xemThongTin({ tuoi: 20, ten: "Luc" });
function Xem(nguoi) {
    console.log("\nT\u00EAn: " + nguoi.ten + "\nTu\u1ED5i: " + nguoi.tuoi + "\n");
}
Xem({ ten: "Luc", tuoi: 20 });
var tuong = /** @class */ (function () {
    function tuong() {
    }
    tuong.prototype.xemTuong = function () {
        console.log('Xem');
    };
    tuong.prototype.donkynang = function (mau) {
        return mau;
    };
    return tuong;
}());
/*Namespace - Export*/
//Namespace có thể đặt tên thoải mái ko sợ trùng cái buildin function
var TrongNaySeKhongLoi;
(function (TrongNaySeKhongLoi) {
    var String = /** @class */ (function () {
        function String() {
        }
        return String;
    }());
    TrongNaySeKhongLoi.String = String;
    var Number = /** @class */ (function () {
        function Number() {
        }
        return Number;
    }());
})(TrongNaySeKhongLoi || (TrongNaySeKhongLoi = {}));
var EP = new TrongNaySeKhongLoi.String;
