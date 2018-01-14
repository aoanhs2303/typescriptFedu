abstract class DienThoai {
	ten: string;

	abstract guiTinNhan(): void
	public goiDienThoai() {
		console.log("Goi dien");
	}
}
// var samsung = new DienThoai(); Abstract Class ko dùng để tạo đối tượng chỉ dùng để thiết kế class

class Android extends DienThoai {
	guiTinNhan() {
		console.log("Gửi tin nhắn");
	}
}

var samsung = new Android();
samsung.guiTinNhan();