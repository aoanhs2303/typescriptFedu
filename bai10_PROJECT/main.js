var SanPham = /** @class */ (function () {
    function SanPham(id, ten, anh, gia, mota, tinhtrang) {
        this._id = id;
        this._ten = ten;
        this._anh = anh;
        this._gia = gia;
        this._mota = mota;
        this._tinhtrang = tinhtrang;
    }
    Object.defineProperty(SanPham.prototype, "id", {
        /*ID*/
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "ten", {
        /*TÊN*/
        get: function () {
            return this._ten;
        },
        set: function (v) {
            this._ten = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "anh", {
        /*ẢNH*/
        get: function () {
            return this._anh;
        },
        set: function (v) {
            this._anh = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "gia", {
        /*GIÁ*/
        get: function () {
            return this._gia;
        },
        set: function (v) {
            this._gia = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "mota", {
        /*MÔ TẢ*/
        get: function () {
            return this._mota;
        },
        set: function (v) {
            this._mota = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "tinhtrang", {
        /*TÌNH TRẠNG*/
        get: function () {
            return this._tinhtrang;
        },
        set: function (v) {
            this._tinhtrang = v;
        },
        enumerable: true,
        configurable: true
    });
    return SanPham;
}());
