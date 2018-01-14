class SanPham {
	private _id: number;
	private _ten: string;
	private _anh: string;
	private _gia: number;
	private _mota: string;
	private _tinhtrang: boolean;

	constructor(id: number, ten: string, anh: string, gia: number, mota: string, tinhtrang: boolean) {
		this._id = id;
		this._ten = ten;
		this._anh = anh;
		this._gia = gia;
		this._mota = mota;
		this._tinhtrang = tinhtrang;
	}

	/*ID*/
	public get id() : number {
		return this._id;
	}
	public set id(v : number) {
		this._id = v;
	}

		/*TÊN*/
	public get ten() : string {
		return this._ten;
	}
	public set ten(v : string) {
		this._ten = v;
	}

		/*ẢNH*/
	public get anh() : string {
		return this._anh;
	}
	public set anh(v : string) {
		this._anh = v;
	}

		/*GIÁ*/
	public get gia() : number {
		return this._gia;
	}
	public set gia(v : number) {
		this._gia = v;
	}

		/*MÔ TẢ*/
	public get mota() : string {
		return this._mota;
	}
	public set mota(v : string) {
		this._mota = v;
	}

		/*TÌNH TRẠNG*/
	public get tinhtrang() : boolean {
		return this._tinhtrang;
	}
	public set tinhtrang(v : boolean) {
		this._tinhtrang = v;
	}
}