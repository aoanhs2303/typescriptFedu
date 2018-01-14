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
var DienThoai = /** @class */ (function () {
    function DienThoai() {
    }
    DienThoai.prototype.goiDienThoai = function () {
        console.log("Goi dien");
    };
    return DienThoai;
}());
// var samsung = new DienThoai(); Abstract Class ko dùng để tạo đối tượng chỉ dùng để thiết kế class
var Android = /** @class */ (function (_super) {
    __extends(Android, _super);
    function Android() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Android.prototype.guiTinNhan = function () {
        console.log("Gửi tin nhắn");
    };
    return Android;
}(DienThoai));
var samsung = new Android();
samsung.guiTinNhan();
