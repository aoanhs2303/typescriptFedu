function tinhtong() : number {
	return 100 + 300;
}

console.log(tinhtong());

function mang() : string[] {
	return ['abc', 'LOL'];
}

function TBC(a: number, b:number):number {
	let avg = (a + b) / 2;
	return avg;
}

var f = function Hello(user: string) : string {
	return `Chao: ${user}`;
}
console.log(f('Luc'));

var g : (u: string) => string = function(u) {
	return `Chao: ${u}`;
}

/*Arrow function*/
var h = (x: number) : number => { // chỉ thẩy => thành chứ function
	return x;
}

var tbc = (x: number, y: number):number => {
	return (x + y) / 2;
}