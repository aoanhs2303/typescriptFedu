var nhan_vat_game = /** @class */ (function () {
    function nhan_vat_game(ten, slogan, mau) {
        this.tenA = ten;
        this.sloganA = slogan;
        this.mauA = mau;
    }
    nhan_vat_game.prototype.chay = function () { };
    nhan_vat_game.prototype.chem = function () { };
    nhan_vat_game.prototype.show = function () {
        return "T\u01B0\u1EDBng: " + this.tenA + ", " + this.sloganA + ". Ch\u1EC9 s\u1ED1 m\u00E1u: " + this.mauA;
    };
    return nhan_vat_game;
}());
var yasua = new nhan_vat_game('Yasua', 'The Unforgiven', 600);
var zed = new nhan_vat_game('Zed', 'The Master of Shadows', 500);
console.log(zed.show());
/*CLASS ĐIỆN THOẠI*/
var dienthoai = /** @class */ (function () {
    function dienthoai(ten, gia, sao, mausac) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mausac = mausac;
    }
    dienthoai.prototype.show = function () {
        return "\nT\u00EAn \u0111i\u1EC7n tho\u1EA1i : " + this.ten + "\nGi\u00E1: " + this.gia + "\nSao: " + this.sao + "\nM\u00E0u S\u1EAFc: " + this.mausac.length + "\n\t\t";
    };
    return dienthoai;
}());
var iPhone = new dienthoai('iPhone X', 1000, 5, ['Trắng', 'Đen', 'Đỏ']);
console.log(iPhone.show());
/*Quản lý công việc*/
var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Proceessing"] = 11] = "Proceessing";
    state[state["Finish"] = 12] = "Finish";
})(state || (state = {}));
var CongViec = /** @class */ (function () {
    function CongViec(id, ten, trangthai) {
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }
    CongViec.prototype.show = function () {
        return this.trangthai;
    };
    return CongViec;
}());
var cv1 = new CongViec(1, 'Thư ký', state.Finish);
console.log(cv1.show());
/*Từ khóa STATIC*/
var LOL = /** @class */ (function () {
    function LOL(ten, slogan, mau) {
        this.tenA = ten;
        this.sloganA = slogan;
        this.mauA = mau;
    }
    LOL.prototype.show = function () {
        return "T\u01B0\u1EDBng: " + this.tenA + ", " + this.sloganA + ". Ch\u1EC9 s\u1ED1 m\u00E1u: " + this.mauA;
    };
    LOL.teststatic = function () {
        return "STATIC";
    };
    LOL.tenA = "Static sẽ ko cần tạo đối tượng";
    return LOL;
}());
console.log(LOL.tenA);
console.log(LOL.mauA); // sẽ bị underfind
console.log(LOL.teststatic());
